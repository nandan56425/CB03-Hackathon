import batches, { Batch } from "../data/batches";

export async function verifyBatch(
  batchId: string
): Promise<Batch | null> {
  const id = batchId.trim().toUpperCase();

  if (!id) {
    return null;
  }

  // Simulate backend + blockchain verification time.
  // This will be removed when the real API is connected.
  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  const batch = batches[id];

  return batch ?? null;
}