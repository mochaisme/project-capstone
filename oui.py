from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pandas as pd
import shutil
import os

options = webdriver.ChromeOptions()
options.add_argument('--headless')  # Hapus ini jika ingin melihat browsernya
options.add_argument('--disable-gpu')

driver = None
comments = []
scores = []  # dummy score

video_url = "https://www.tiktok.com/@jujumaoo/video/7451209732972498184"

try:
    driver = webdriver.Chrome(options=options)
    driver.get(video_url)
    time.sleep(5)

    for _ in range(10):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)

    comment_elements = driver.find_elements(By.CSS_SELECTOR, '[class*="CommentItem-commentText"]')
    for c in comment_elements:
        try:
            comment = c.text
            comments.append(comment)
            scores.append(5)
        except:
            continue

finally:
    if driver:
        driver.quit()

# Simpan ke CSV
df = pd.DataFrame({"content": comments, "score": scores})
df.to_csv("tiktok_reviews.csv", index=False)
print("Saved tiktok_reviews.csv")
