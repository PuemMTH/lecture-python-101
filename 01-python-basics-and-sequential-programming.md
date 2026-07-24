---
theme: geist
colorSchema: light
title: Python เบื้องต้นและโปรแกรมแบบลำดับ
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
routeAlias: basics
layout: cover
class: concept
---

<div class="eyebrow">Python พื้นฐาน · Session 01</div>

# Python เบื้องต้นและโปรแกรมแบบลำดับ

Input → Process → Output

---

<div class="eyebrow">Mental model</div>

# โปรแกรมหนึ่งโปรแกรมมี 3 ส่วน

<div class="pipeline">
  <div><code>Input</code><br><span class="muted">รับข้อมูล</span></div>
  <div><code>Process</code><br><span class="muted">คำนวณ · เปรียบเทียบ · แปลง</span></div>
  <div><code>Output</code><br><span class="muted">แสดงหรือส่งผลลัพธ์</span></div>
</div>

<div v-click class="takeaway"><p>ก่อนเขียนโค้ด ให้ระบุ input, ขั้นตอน และ output ที่ต้องการก่อนเสมอ</p></div>

---

<div class="eyebrow">Output</div>

# แสดงผลด้วย `print()`

```python {monaco-run} {autorun:false}
name = "Mali"
score = 82
print("Student:", name)
print("Score:", score)
print()
print("End of report")
```

- แสดงข้อความ ตัวเลข หรือนิพจน์ และส่งหลายค่าได้โดยคั่นด้วย comma
- `print()` เปล่าสร้างบรรทัดว่าง
- ช่องว่างและการขึ้นบรรทัดใหม่เป็นส่วนหนึ่งของ output

---

<div class="eyebrow">Values</div>

# Data Types

<div class="grid4">
  <div v-click class="card"><h3><code>int</code></h3><p>จำนวนเต็ม<br><code>10</code>, <code>-3</code></p></div>
  <div v-click class="card"><h3><code>float</code></h3><p>จำนวนทศนิยม<br><code>2.5</code>, <code>0.07</code></p></div>
  <div v-click class="card"><h3><code>str</code></h3><p>ข้อความ<br><code>"Python"</code></p></div>
  <div v-click class="card"><h3><code>bool</code></h3><p>ค่าความจริง<br><code>True</code>, <code>False</code></p></div>
</div>

```python {monaco-run} {autorun:false}
for value in [10, 2.5, "Python", True]:
    print(value, "→", type(value))
```

---

<div class="eyebrow">String</div>

# Text with Operator

```python {monaco-run} {autorun:false}
greeting = "Hello" + " " + "World"
separator = "-" * 20
message = """First line
Second line"""

print(greeting)
print(separator)
print(message)
```

<div class="grid2">
  <div class="card"><h3><code>+</code></h3><p>เชื่อม String</p></div>
  <div class="card"><h3><code>*</code></h3><p>ทำ String ซ้ำ</p></div>
</div>

---

<div class="eyebrow">Variables</div>

# Assignment คำนวณขวาก่อน เก็บซ้ายทีหลัง

<div class="formula"><code>name = expression</code></div>

<div class="grid2">
  <div class="card"><h3>ตั้งชื่อให้สื่อความหมาย</h3><p><code>weight_kg</code>, <code>total_price</code></p></div>
  <div class="card"><h3>ระบุหน่วยเมื่อจำเป็น</h3><p><code>height_m</code> ชัดกว่า <code>height</code></p></div>
</div>

```python
x, y = 10, 20
quotient, remainder = 17 // 3, 17 % 3
```

---

<div class="eyebrow">Expressions</div>

# ตัวดำเนินการที่ใช้บ่อย

<table class="compact-table">
  <thead><tr><th>Operator</th><th>ความหมาย</th><th>ตัวอย่าง</th></tr></thead>
  <tbody>
    <tr><td><code>+ - * /</code></td><td>คำนวณพื้นฐาน</td><td><code>10 / 4 → 2.5</code></td></tr>
    <tr><td><code>//</code></td><td>หารแล้วปัดลง</td><td><code>17 // 3 → 5</code></td></tr>
    <tr><td><code>%</code></td><td>เศษจากการหาร</td><td><code>17 % 3 → 2</code></td></tr>
    <tr><td><code>**</code></td><td>ยกกำลัง</td><td><code>2 ** 3 → 8</code></td></tr>
  </tbody>
</table>

<div class="takeaway"><p>ใช้วงเล็บเมื่อช่วยให้สูตรอ่านง่ายและลำดับการคำนวณชัดเจน</p></div>

---

<div class="eyebrow">Input</div>

# `input()` คืนค่าเป็น `str` เสมอ

<div class="pipeline">
  <div>Input</div><div>Parse</div><div>Calculate</div><div>Output</div>
</div>

```python {monaco-run} {autorun:false}
weight_kg = float(input("Weight (kg): "))
height_m = float(input("Height (m): "))
bmi = weight_kg / height_m**2
print(f"BMI: {bmi:.2f}")
```

---

<div class="eyebrow">Formatting</div>

# f-string ทำให้ output อ่านง่าย

```python {monaco-run} {autorun:false}
name = "Mali"
score = 82.5
salary = 35000

print(f"{name}: {score:.2f} points")
print(f"Salary: {salary:,.2f} baht")
```

<div class="grid2">
  <div class="card"><h3><code>:.2f</code></h3><p>ทศนิยม 2 ตำแหน่ง</p></div>
  <div class="card"><h3><code>:,.2f</code></h3><p>คั่นหลักพันและทศนิยม 2 ตำแหน่ง</p></div>
</div>

---

<div class="eyebrow">Putting it together</div>

# ทดสอบคำนวนราคา

```python {monaco-run} {autorun:false}
price = 125.50
quantity = 3
subtotal = price * quantity
vat = subtotal * 0.07
net_total = subtotal + vat

print(f"Subtotal: {subtotal:,.2f} baht")
print(f"VAT:      {vat:,.2f} baht")
print(f"Total:    {net_total:,.2f} baht")
```

---
layout: center
class: summary-slide
---

<div class="eyebrow">Session 01 · Recap</div>

# จากข้อมูลดิบ<br>สู่ผลลัพธ์ของโปรแกรม

<div class="summary-map">
  <div class="summary-step">
    <span>01</span><strong>Data Types</strong><small>กำหนดความหมายและ operation ที่ใช้ได้</small>
  </div>
  <div class="summary-step">
    <span>02</span><strong>Variable</strong><small>ตั้งชื่อและเก็บค่าระหว่างทำงาน</small>
  </div>
  <div class="summary-step">
    <span>03</span><strong>Expression</strong><small>นำค่ามาคำนวณตามลำดับ operator</small>
  </div>
  <div class="summary-step">
    <span>04</span><strong>Input / Output</strong><small>รับข้อมูล แปลงชนิด และแสดงผล</small>
</div>
</div>

<div class="summary-result"><span>MENTAL MODEL</span> <code>input → process → output</code> <span class="summary-copy">= โครงสร้างพื้นฐานของโปรแกรม</span></div>
