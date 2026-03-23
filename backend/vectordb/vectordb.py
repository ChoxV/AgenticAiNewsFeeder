import faiss
import numpy as np

class VectorDB:
    def __init__(self, dimension):
        self.index = faiss.IndexFlatL2(dimension)
        self.text_chunks = []

    def add(self, embeddings, texts):
        self.index.add(np.array(embeddings))
        self.text_chunks.extend(texts)

    def  search(self, query_embedding, k=5):
        distances, indices = self.index.search(query_embedding,k)
        results = [self.text_chunks[i] for i in indices[0]]

        return results