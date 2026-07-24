---
theme: geist
colorSchema: auto
title: Session 4 — Loop
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
layout: cover
class: concept
---

<div class="eyebrow">Python พื้นฐาน · Session 04</div>

# Loop

ทำซ้ำอย่างมีจุดหยุด

---

<div class="eyebrow">Counted repetition</div>

# `for` วนผ่านข้อมูลทีละค่า

```python {monaco-run} {autorun:false}
for number in range(1, 6):
    print(number)

for x in range(1, 6):
    print(f"{x:2} | {x**2:3} | {'#' * x}")
```

<div class="takeaway"><p><code>range(start, stop, step)</code> ไม่รวมค่า stop</p></div>

---

<div class="eyebrow">State across rounds</div>

# Accumulator และ Counter

<div class="grid2">
  <div class="card"><h3>Accumulator</h3><p>สะสมผลทีละรอบ เช่นผลรวม</p></div>
  <div class="card"><h3>Counter</h3><p>นับจำนวนสมาชิกที่ผ่านเงื่อนไข</p></div>
</div>

```python {monaco-run} {autorun:false}
total = 0
passed_count = 0
for score in [72, 88, 41, 95, 67]:
    total += score
    if score >= 50:
        passed_count += 1
print(total, passed_count)
```

---

<div class="eyebrow">Iterables</div>

# วนผ่าน String และ List

```python {monaco-run} {autorun:false}
for character in "Python":
    print(character)

for index, value in enumerate([10, 20, 30]):
    print(index, value)
```

<div class="takeaway"><p>ใช้ <code>enumerate()</code> เมื่อต้องการทั้ง index และ value</p></div>

---

<div class="eyebrow">Search</div>

# Linear search: พบแล้วหยุดได้

```python {monaco-run} {autorun:false}
def find(text, target):
    for index, character in enumerate(text):
        if character == target:
            return index
    return -1

print(find("Hello", "e"))
print(find("Hello", "x"))
```

<div class="takeaway"><p>ถ้าสนใจเพียงว่าพบหรือไม่ ใช้ <code>target in text</code></p></div>

---

<div class="eyebrow">Condition-controlled repetition</div>

# `while` วนขณะที่ condition เป็นจริง

<div class="grid3">
  <div class="card"><h3>State</h3><p>ค่าปัจจุบันที่ condition ใช้ตรวจ</p></div>
  <div class="card"><h3>Condition</h3><p>เงื่อนไขที่จะวนต่อ</p></div>
  <div class="card"><h3>Update</h3><p>ทำให้ state เข้าใกล้การหยุด</p></div>
</div>

<div class="card red"><h3>Infinite loop</h3><p>เกิดเมื่อ state ไม่เปลี่ยนไปสู่จุดหยุด; ใน terminal หยุดด้วย <code>Ctrl-C</code></p></div>

---

<div class="eyebrow">Sentinel</div>

# ค่าพิเศษสั่งให้ loop หยุด

```python {monaco-run} {autorun:false}
entries = [10, 15, 4, 8, -1]
total = 0
index = 0

while index < len(entries):
    value = entries[index]
    index += 1
    if value == -1:
        break
    total += value

print(total)
```

<div class="takeaway"><p>Sentinel ต้องไม่ชนกับค่าข้อมูลปกติที่อนุญาต</p></div>

---

<div class="eyebrow">Unknown number of attempts</div>

# `while True` เมื่อจุดหยุดอยู่ข้างใน

```python {monaco-run} {autorun:false}
while True:
    password = input("Enter password: ")
    if password == "I love Python":
        print("Correct password. Access granted.")
        break
    print("Incorrect password. Access denied.")
```

---

<div class="eyebrow">Loop control</div>

# `break` และ `continue`

<div class="grid2">
  <div class="card"><h3><code>break</code></h3><p>ออกจาก loop ชั้นปัจจุบันทันที</p></div>
  <div class="card"><h3><code>continue</code></h3><p>ข้ามส่วนที่เหลือของรอบปัจจุบัน</p></div>
</div>

<div class="takeaway"><p>ใน <code>while</code> อย่าให้ continue ข้าม update ที่จำเป็นต่อการหยุด</p></div>

---

<div class="eyebrow">Nested loops</div>

# Outer loop เป็นแถว · Inner loop เป็นคอลัมน์

```python {monaco-run} {autorun:false}
for row in range(1, 4):
    line = ""
    for column in range(1, 5):
        line += f"{row * column:3}"
    print(line)
```

<div class="takeaway"><p>Nested loop เหมาะกับตาราง ลวดลาย และข้อมูลสองมิติ</p></div>

---

<div class="eyebrow">Putting it together</div>

# สรุปคะแนน

```python {monaco-run} {autorun:false}
scores = [72, 88, 41, 95, 67]
total = 0
passed_count = 0

for score in scores:
    total += score
    if score >= 50:
        passed_count += 1

average = total / len(scores) if scores else None
print(f"Average: {average:.1f}")
print(f"Passed: {passed_count}")
```

---
layout: center
class: concept
---

# Session 4 สรุป

<div class="pipeline">
  <div><code>for</code></div><div><code>while</code></div><div>State update</div><div>Stop condition</div>
</div>
