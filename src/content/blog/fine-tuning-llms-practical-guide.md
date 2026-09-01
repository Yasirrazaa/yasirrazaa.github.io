---
title: "Fine-Tuning LLMs: When, Why, and How"
description: "A practical guide to fine-tuning large language models — when it makes sense, when RAG is better, and step-by-step implementation."
pubDate: 2026-06-18
heroImage: "https://images.pexels.com/photos/6985268/pexels-photo-6985268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
category: "AI Engineering"
tags: ["LLM", "Fine-tuning", "Unsloth", "QLoRA", "PEFT"]
featured: false
---

## When to Fine-Tune vs. Use RAG

This is the most common question I get. Here's my decision framework.

**Fine-tune when:**
- You need consistent formatting or style
- The task is well-defined and repetitive
- You have high-quality training data
- Latency is critical (no retrieval step)

**Use RAG when:**
- Knowledge changes frequently
- You need source attribution
- You have limited training data

## Step-by-Step Fine-Tuning with Unsloth

### Step 1: Install Unsloth
```bash
pip install unsloth
```

### Step 2: Load Your Base Model
```python
from unsloth import FastLanguageModel

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="unsloth/Llama-3.2-3B-Instruct",
    max_seq_length=2048,
    dtype=None,
    load_in_4bit=True,
)
```

### Step 3: Add LoRA Adapters
```python
model = FastLanguageModel.get_peft_model(
    model,
    r=16,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_alpha=16,
    lora_dropout=0,
    bias="none",
    use_gradient_checkpointing=True,
)
```

### Step 4: Prepare Your Data

Quality > Quantity. 100 excellent examples often outperform 10,000 mediocre ones.

### Step 5: Train
```python
from trl import SFTTrainer

trainer = SFTTrainer(
    model=model,
    tokenizer=tokenizer,
    train_dataset=dataset,
    args=TrainingArguments(
        per_device_train_batch_size=2,
        gradient_accumulation_steps=4,
        learning_rate=2e-4,
        num_train_epochs=3,
    ),
)
```

## Cost Considerations

| Approach | Upfront Cost | Per-Query Cost | Maintenance |
|----------|-------------|---------------|-------------|
| Fine-tuning | $50-500 | Lower | Re-train periodically |
| RAG | $0-100 | Higher | Update knowledge base |
| Prompt engineering | $0 | Highest | Update prompts |

## Conclusion

Fine-tuning is a powerful tool, but it's not always the right one. Start with prompt engineering, graduate to RAG if you need external knowledge, and fine-tune only when you have a clear, measurable benefit.
