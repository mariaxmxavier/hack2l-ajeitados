from huggingface_hub import hf_hub_download

arquivo = hf_hub_download(
    repo_id="ealvaradob/phishing-dataset",
    filename="texts.json",
    repo_type="dataset",
    local_dir="."
)

print("Dataset baixado em:", arquivo)