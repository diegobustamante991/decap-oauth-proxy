# Private knowledge folder

Drop documents here to feed Beepie extra context about Diego. Supported:
`.md`, `.markdown`, `.txt`, `.json`, `.csv`, `.pdf`, `.docx`, `.xlsx`/`.xls`.

## Workflow (raw docs stay local)
1. Put your source documents in this folder.
2. Run `npm run build:knowledge`. It extracts text from every file and writes
   `../api/_knowledge.extra.js`.
3. Commit ONLY the generated `api/_knowledge.extra.js` (the raw docs in this
   folder are gitignored, so they never get committed or deployed).
4. Push / redeploy the proxy. Beepie now uses the new knowledge.

The raw files are intentionally NOT committed (they can be large, e.g. design
PDFs, and may be confidential). Only the extracted text ships, baked into the
serverless function.

## Privacy & confidentiality (read this)
- The compiled text is sent to the model on every request and the agent can
  quote or paraphrase it in answers to ANY visitor. Beepie is public.
- Do NOT add anything confidential, NDA-bound, or internal-only unless you are
  certain you can expose it publicly. Internal strategy decks, beta research,
  and company overviews often are not safe to surface in a public chat.
- Never add secrets, credentials, PII, or private contact details.

## Notes
- Image-only PDFs (design exports) yield little or no text (no OCR).
- Spreadsheets are flattened to CSV text per sheet.
- Keep total extracted text reasonable; it is sent as context on every request.
