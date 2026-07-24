---
theme: geist
colorSchema: auto
title: Session 2 — Function
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
layout: cover
class: concept
---

<div class="eyebrow">Python พื้นฐาน · Session 02</div>

# Function

ตั้งชื่อให้ขั้นตอน · ลดโค้ดซ้ำ · ส่งค่ากลับไปใช้ต่อ

---

<div class="eyebrow">Why function?</div>

# รวมงานหนึ่งเรื่องไว้ใต้ชื่อเดียว

<div class="grid3">
  <div v-click class="card"><h3>Reuse</h3><p>เรียกใช้ขั้นตอนเดิมได้หลายครั้ง</p></div>
  <div v-click class="card"><h3>Change once</h3><p>แก้สูตรเพียงจุดเดียว</p></div>
  <div v-click class="card"><h3>Read clearly</h3><p>แยกโปรแกรมใหญ่เป็นส่วนย่อย</p></div>
</div>

---

<div class="eyebrow">Built-ins</div>

# Function ที่ Python มีให้แล้ว

```python {monaco-run} {autorun:false}
length = len("Python")
rounded = round(3.14159, 2)
largest = max(4, 9, 2)
quotient, remainder = divmod(17, 3)

print(length, rounded, largest)
print(quotient, remainder)
```

<div class="takeaway"><p>Return value เก็บในตัวแปรหรือส่งต่อให้นิพจน์อื่นได้</p></div>

---

<div class="eyebrow">An important difference</div>

# `print()` แสดงผล แต่คืน `None`

```python {monaco-run} {autorun:false}
printed_value = print("Hello")
print("returned:", printed_value)
```

<div v-click class="takeaway"><p>สิ่งที่เห็นบนหน้าจอ ไม่จำเป็นต้องเป็นค่าที่ function ส่งกลับ</p></div>

---

<div class="eyebrow">Define and call</div>

# `def`, parameter และ argument

```python {monaco-run} {autorun:false}
def rectangle_area(width, height):
    return width * height

area = rectangle_area(5, 3)
print(area)
```

<div class="grid2">
  <div class="card"><h3>Parameter</h3><p><code>width</code>, <code>height</code> คือชื่อที่ function ใช้รับข้อมูล</p></div>
  <div class="card"><h3>Argument</h3><p><code>5</code>, <code>3</code> คือค่าที่ส่งตอนเรียก</p></div>
</div>

---

<div class="eyebrow">Return vs side effect</div>

# Function คำนวณควร `return`

<div class="grid2">
  <div class="card green"><h3><code>return</code></h3><p>ส่งค่ากลับให้ caller และจบ function ทันที</p></div>
  <div class="card red"><h3><code>print()</code></h3><p>แสดงผลเท่านั้น ค่าที่แสดงไม่ถูกส่งกลับไปคำนวณต่อ</p></div>
</div>

```python
def area(width, height):
    return width * height

print(f"Area: {area(5, 3)}")
```

---

<div class="eyebrow">Scope</div>

# Local อยู่ใน function · Global อยู่นอก function

```python {monaco-run} {autorun:false}
exchange_rate = 35.5

def usd_to_thb(usd):
    return usd * exchange_rate

x = 10
def show_local_scope():
    x = 50
    return x

print(usd_to_thb(10), show_local_scope(), x)
```

<div class="takeaway"><p>ส่งข้อมูลเข้าด้วย parameter และส่งผลออกด้วย return แทนการพึ่ง global variable</p></div>

---

<div class="eyebrow">Scope pitfall</div>

# Assignment ทำให้ชื่อนั้นเป็น local โดยปริยาย

```python
x = 10

def broken_scope():
    print(x)  # อ่าน local ก่อนมีค่า
    x = 50
```

<div class="card red"><h3><code>UnboundLocalError</code></h3><p>Python เห็น assignment จึงมอง <code>x</code> ใน function เป็น local ทั้งหมด</p></div>

---

<div class="eyebrow">Flexible calls</div>

# Default และ keyword arguments

```python {monaco-run} {autorun:false}
def discounted_price(price, discount_percent=0):
    return price * (1 - discount_percent / 100)

normal = discounted_price(1_000)
sale = discounted_price(1_000, discount_percent=10)
print(normal, sale)
```

<div class="takeaway"><p>Parameter ที่มี default ต้องอยู่หลัง parameter ที่ไม่มี default</p></div>

---

<div class="eyebrow">Composition</div>

# ผลจาก function หนึ่ง เป็น input ให้อีก function

```python {monaco-run} {autorun:false}
def rectangle_area(width, height):
    return width * height

rounded_area = round(rectangle_area(4.8, 3.2), 1)
print(rounded_area)
```

<div class="takeaway"><p>ใช้ intermediate variable เมื่อการซ้อน calls ทำให้อ่านยาก</p></div>

---

<div class="eyebrow">Verification</div>

# ตรวจผลระหว่างพัฒนาด้วย `assert`

```python {monaco-run} {autorun:false}
def calculate_bmi(weight_kg, height_m):
    if height_m <= 0:
        return None
    return weight_kg / height_m**2

assert round(calculate_bmi(68, 1.72), 2) == 22.99
assert calculate_bmi(68, 0) is None

print(f"BMI: {calculate_bmi(68, 1.72):.2f}")
```

<div class="takeaway"><p>ตรวจ normal case และ boundary case — แต่ไม่ใช้ assert แทนการตรวจ input จากผู้ใช้</p></div>

---
layout: center
class: concept
---

# Session 2 สรุป

<div class="pipeline">
  <div><code>def</code></div><div>Parameter</div><div><code>return</code></div><div><code>assert</code></div>
</div>
