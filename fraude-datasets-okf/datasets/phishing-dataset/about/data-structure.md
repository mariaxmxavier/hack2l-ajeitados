---
type: Dataset Topic
title: Phishing Dataset Data Structure
description: Description of the fields contained in the phishing dataset.
---

# Data Structure

Each entry contains two main fields:

- `text`: the textual content being analyzed
- `label`: the classification assigned to the content

A simplified entry has the following structure:

```json
{
  "text": "example content",
  "label": 0
}

Esse responde:

> **Como cada entrada é estruturada?**

---

## 5. `labels.md`

```bash
cat > fraude-datasets-okf/datasets/phishing-dataset/labels.md <<'EOF'
---
type: Dataset Topic
title: Phishing Dataset Labels
description: Description of the labels used by the phishing dataset.
---

# Labels

The dataset uses binary labels:

- `0`: benign content
- `1`: phishing content

The classification task consists of determining whether an input
represents benign or phishing content.
