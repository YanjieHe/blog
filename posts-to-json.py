import json 
import os

def load_document_info(path):
    with open(path, "r") as f:
        return json.loads(f.read())


def load_content(path):
    with open(path, "r") as f:
        return f.read()

prefix = "./posts/"

def read_all_blogs():
    info = load_document_info("./posts/blogs.json")
    for item in info:
        item["content"] = load_content(prefix + item["file-name"])
        print("load blog: " + item["title"])
    return info

if __name__ == "__main__":
    data = read_all_blogs()
    with open("./src/Posts.js", "w") as f:
        f.write("const Posts = ")
        f.write(json.dumps(data))
        f.write("\nexport default Posts;")
