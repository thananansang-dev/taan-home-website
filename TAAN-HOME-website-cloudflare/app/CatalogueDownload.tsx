"use client";

import { useState } from "react";

type DownloadState = "idle" | "downloading" | "complete" | "error";

type CatalogueDownloadProps = {
  apiUrl: string;
  catalogueName: string;
  fileName: string;
  fileSizeBytes: number;
  fileSizeLabel: string;
  pageCount: number;
  viewUrl: string;
};

export default function CatalogueDownload({
  apiUrl,
  catalogueName,
  fileName,
  fileSizeBytes,
  fileSizeLabel,
  pageCount,
  viewUrl,
}: CatalogueDownloadProps) {
  const [state, setState] = useState<DownloadState>("idle");
  const [progress, setProgress] = useState(0);

  const downloadCatalogue = async () => {
    if (state === "downloading") return;

    setState("downloading");
    setProgress(0);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok || !response.body) {
        throw new Error("Catalogue download could not be started");
      }

      const totalBytes =
        Number(response.headers.get("content-length")) || fileSizeBytes;
      const reader = response.body.getReader();
      const chunks: BlobPart[] = [];
      let receivedBytes = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(new Uint8Array(value));
        receivedBytes += value.byteLength;
        setProgress(Math.min(99, Math.round((receivedBytes / totalBytes) * 100)));
      }

      const objectUrl = URL.createObjectURL(
        new Blob(chunks, { type: "application/pdf" }),
      );
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1_000);

      setProgress(100);
      setState("complete");
    } catch {
      setState("error");
    }
  };

  const statusText =
    state === "complete"
      ? "Download complete"
      : state === "error"
        ? "Download interrupted"
        : `Downloading ${progress}%`;

  return (
    <div className="catalogue-download-panel">
      <p className="catalogue-file-meta">
        PDF Catalogue · {pageCount} pages · {fileSizeLabel}
      </p>
      <div className="catalogue-download-buttons">
        <a
          className="button catalogue-view-button"
          href={viewUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Catalogue
        </a>
        <button
          className="button button-dark catalogue-download-button"
          type="button"
          onClick={downloadCatalogue}
          disabled={state === "downloading"}
          data-meta-event="DownloadCatalogue"
          data-meta-content={catalogueName}
          data-meta-category="Catalogue"
        >
          {state === "downloading" ? `Downloading ${progress}%` : "Download PDF"}
        </button>
      </div>

      {state !== "idle" && (
        <div className={`catalogue-progress ${state}`} aria-live="polite">
          <div className="catalogue-progress-copy">
            <span>{statusText}</span>
            {state === "error" && (
              <a href={apiUrl} download={fileName}>
                Download without progress
              </a>
            )}
          </div>
          <div
            className="catalogue-progress-track"
            role="progressbar"
            aria-label={`${catalogueName} download progress`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={state === "error" ? undefined : progress}
          >
            <span style={{ width: `${state === "error" ? 100 : progress}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}
