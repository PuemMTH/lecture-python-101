---
theme: geist
colorSchema: auto
title: ไฟล์ ข้อผิดพลาด และโปรเจกต์ข้อมูล
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
layout: cover
class: concept
---

<div class="eyebrow">Python พื้นฐาน · Session 06</div>

# ไฟล์ ข้อผิดพลาด และโปรเจกต์ข้อมูล

จาก text file ไปสู่ NumPy และกราฟ

---

<div class="eyebrow">Files</div>

# อ่านไฟล์ด้วย `with open(...)`

```python
with open("scores.txt", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

<div class="grid2">
  <div class="card"><h3><code>with</code></h3><p>ปิดไฟล์ให้อัตโนมัติ</p></div>
  <div class="card"><h3>ทีละบรรทัด</h3><p>เหมาะกับไฟล์ขนาดใหญ่กว่าอ่านทั้งหมดพร้อมกัน</p></div>
</div>

---

<div class="eyebrow">Text pipeline</div>

# จากข้อความดิบเป็นข้อมูลที่ใช้คำนวณได้

<div class="pipeline">
  <div>Read</div><div>Strip</div><div>Split</div><div>Convert</div><div>Validate</div><div>Store</div>
</div>

<div class="grid2">
  <div class="card"><h3><code>strip()</code></h3><p>ลบ whitespace ต้นและท้าย</p></div>
  <div class="card"><h3><code>split(separator)</code></h3><p>แบ่งข้อความเป็นส่วนย่อย</p></div>
</div>

---

<div class="eyebrow">Expected failures</div>

# จับ exception แบบเฉพาะ

```python {monaco-run} {autorun:false}
text = "82.5"

try:
    score = float(text)
except ValueError:
    print("Score must be numeric")
else:
    print(score)
```

<div class="takeaway"><p>ครอบ try เฉพาะคำสั่งที่คาดว่าอาจพลาด และไม่ใช้ bare <code>except</code> หรือ <code>except: pass</code></p></div>

---

<div class="eyebrow">Modules</div>

# `import` นำ code ที่เกี่ยวข้องมาใช้

```python
import math
import numpy as np
import matplotlib.pyplot as plt
```

<div class="grid2">
  <div class="card"><h3>Standard library</h3><p><code>math</code> มากับ Python</p></div>
  <div class="card"><h3>Third-party package</h3><p>NumPy และ Matplotlib ต้องติดตั้งเพิ่ม</p></div>
</div>

---

<div class="eyebrow">Arrays</div>

# NumPy คำนวณกับข้อมูลทั้งก้อน

```python {monaco-run} {autorun:false}
import numpy as np

scores = np.array([52, 61, 68, 78, 86])
average = scores.mean()
passed = scores >= 50

print(scores * 2)
print(average)
print(passed)
```

<div class="takeaway"><p><code>mean</code>, <code>min</code>, <code>max</code> และ <code>sum</code> ใช้สรุป Array</p></div>

---

<div class="eyebrow">Array iteration</div>

# Index และการวนค่าเหมือน sequence

```python {monaco-run} {autorun:false}
import numpy as np

scores = np.array([52, 61, 68, 78, 86])
print(scores[0], scores[-1])

for index, score in enumerate(scores):
    print(f"Element#{index} = {score}")
```

---

<div class="eyebrow">Load numeric data</div>

# `np.loadtxt()` อ่านตารางตัวเลข

```python
import numpy as np

values = np.loadtxt("data.txt")
total = values.sum()
```

<div class="takeaway"><p>เหมาะกับ text file ที่รูปแบบตัวเลขสม่ำเสมอ</p></div>

---

<div class="eyebrow">Scalar vs array</div>

# เลือก function ให้ตรงชนิดข้อมูล

<div class="grid2">
  <div class="card"><h3><code>math.sqrt(value)</code></h3><p>ทำงานกับค่าทีละตัว</p></div>
  <div class="card"><h3><code>np.sqrt(array)</code></h3><p>คืนรากที่สองของทุกสมาชิก</p></div>
</div>

```python {monaco-run} {autorun:false}
import numpy as np

values = np.array([1.0, 2.0, 3.0, 4.0])
print(np.sqrt(values))
```

---

<div class="eyebrow">RMS</div>

# Root Mean Square

$$
x_{rms} = \sqrt{\frac{1}{n}\sum_{i=1}^{n}x_i^2}
$$

```python {monaco-run} {autorun:false}
import numpy as np

values = np.array([1.0, 2.0, 3.0, 4.0])
rms = np.sqrt(np.mean(values**2))

print(rms)
assert np.isclose(rms, np.sqrt(7.5))
```

---

<div class="eyebrow">Visualization</div>

# เลือกกราฟให้ตรงคำถาม

<div class="grid3">
  <div class="card"><h3>Line plot</h3><p>แนวโน้มตามลำดับ</p></div>
  <div class="card"><h3>Scatter plot</h3><p>ความสัมพันธ์ของตัวเลขสองตัว</p></div>
  <div class="card"><h3>Bar chart</h3><p>เปรียบเทียบหมวดหมู่</p></div>
</div>

<div class="takeaway"><p>กราฟต้องมี title, ชื่อแกน และหน่วย</p></div>

---

<div class="eyebrow">Data program</div>

# โครงสร้างโปรแกรมข้อมูล

<div class="pipeline">
  <div>อ่านไฟล์</div><div>ตรวจข้อมูล</div><div>คำนวณ</div><div>แสดงผล</div><div>บันทึกผล</div>
</div>

<div class="takeaway"><p>แยกข้อมูลต้นฉบับออกจากไฟล์ผลลัพธ์</p></div>

---

<div class="eyebrow">Putting it together</div>

# จากข้อมูลสู่กราฟ

```python {monaco-run} {autorun:false}
import numpy as np
import matplotlib.pyplot as plt

hours = np.array([1, 2, 3, 4, 5])
scores = np.array([52, 61, 68, 78, 86])
average_score = scores.mean()

fig, ax = plt.subplots()
ax.plot(hours, scores, marker="o", label="Score")
ax.axhline(average_score, color="gray", linestyle="--", label="Average")
ax.set(title="Study Hours and Scores",
       xlabel="Study time (hours)", ylabel="Score (points)")
ax.legend()
fig.tight_layout()
plt.show()
```

---
layout: center
class: concept
---

# Course Structure
<div class="pipeline">
  <div>ตัวแปร</div><div>Function</div><div>เงื่อนไข</div><div>Collections</div><div>Loop</div><div>ข้อมูลและกราฟ</div>
</div>
