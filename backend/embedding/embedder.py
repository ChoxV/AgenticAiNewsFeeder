from  transformers import AutoTokenizer, AutoModelForCausalLM
model_naaam = "sshleifer/distilbart-cnn-12-6"
tokenizer  = AutoTokenizer.from_pretrained(model_naaam)
model = AutoModelForCausalLM.from_pretrained(model_naaam)
def generate_answer(prompt):
    inputs = tokenizer(prompt, return_tensors = "pt")

    outputs = model.generate(
        **inputs,
        max_new_tokens = 200
    )
    return tokenizer.decode(outputs[0])
