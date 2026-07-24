---
theme: geist
colorSchema: auto
title: Session 5 — List และ Dictionary
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
layout: cover
class: concept
---

<div class="eyebrow">Python พื้นฐาน · Session 05</div>

# List และ Dictionary

เก็บหลายค่า และจัดข้อมูลให้มีโครงสร้าง

---

<div class="eyebrow">Sequence</div>

# List มีลำดับและแก้ไขได้

```python {monaco-run} {autorun:false}
empty = []
mixed = [8, 2.1, "Hello", True]
letters = list("Hello")
odd_numbers = list(range(1, 10, 2))

print(letters)
print(odd_numbers)
```

<div class="takeaway"><p>Index แรกคือ 0, index สุดท้ายคือ <code>len(items) - 1</code>, และ <code>-1</code> คือสมาชิกสุดท้าย</p></div>

---

<div class="eyebrow">Mutation</div>

# เพิ่ม ลบ และแก้ไขสมาชิก

```python {monaco-run} {autorun:false}
items = [10, 20, 30]
items.append(40)
items.insert(1, 15)
items.remove(30)
removed = items.pop()
items[0] = 99

print(items)
print("removed:", removed)
```

---

<div class="eyebrow">Common data work</div>

# Search · Filter · Aggregate

<div class="grid3">
  <div class="card"><h3>Search</h3><p>หา value หรือดูว่าพบหรือไม่</p></div>
  <div class="card"><h3>Filter</h3><p>เลือกค่าที่ผ่านเงื่อนไข</p></div>
  <div class="card"><h3>Aggregate</h3><p>รวมหลายค่าเป็นผลเดียว</p></div>
</div>

```python {monaco-run} {autorun:false}
scores = [72, 88, 41, 95, 67]
print(88 in scores)
print(len(scores), sum(scores), min(scores), max(scores))
```

---

<div class="eyebrow">Transform and filter</div>

# List comprehension

```python {monaco-run} {autorun:false}
scores = [72, 88, 41, 95, 67]
passed_scores = [score for score in scores if score >= 50]

celsius = [0, 20, 30, 100]
fahrenheit = [temp * 9 / 5 + 32 for temp in celsius]

print(passed_scores)
print(fahrenheit)
```

<div class="takeaway"><p>เหมาะเมื่อ expression และ condition สั้นพอที่จะอ่านได้ในบรรทัดเดียว</p></div>

---

<div class="eyebrow">Comprehension + aggregate</div>

# สร้างลำดับหรือรวมผลได้ตรงโจทย์

```python {monaco-run} {autorun:false}
squares = [number**2 for number in range(1, 11)]
series_total = sum(
    number**2 + 2 * number + 1
    for number in range(1, 11)
)

print(squares)
print(series_total)
```

---

<div class="eyebrow">Mapping</div>

# Dictionary เก็บข้อมูลแบบ key → value

```python {monaco-run} {autorun:false}
student = {
    "id": "S01",
    "name": "Mali",
    "score": 82,
}

print(student["name"])
print(student.get("email"))
```

<div class="grid2">
  <div class="card"><h3><code>data[key]</code></h3><p>ใช้เมื่อ key ต้องมี</p></div>
  <div class="card"><h3><code>data.get(key)</code></h3><p>ใช้เมื่อ key อาจไม่มีเป็นเรื่องปกติ</p></div>
</div>

---

<div class="eyebrow">Iteration</div>

# `.items()` ให้ทั้ง key และ value

```python {monaco-run} {autorun:false}
score_by_name = {
    "Mali": 82,
    "Niran": 47,
    "Ploy": 75,
}

for name, score in score_by_name.items():
    print(name, score)
```

---

<div class="eyebrow">Records</div>

# Dictionary หนึ่งตัวแทน record หนึ่งรายการ

```python
students = [
    {"id": "S01", "name": "Mali", "score": 82},
    {"id": "S02", "name": "Niran", "score": 47},
    {"id": "S03", "name": "Ploy", "score": 75},
]
```

<div class="takeaway"><p>ตกลงชื่อ fields และ type ของแต่ละ value ให้เหมือนกันทุก record</p></div>

---

<div class="eyebrow">Putting it together</div>

# ประมวลผลข้อมูลนักเรียน

```python {monaco-run} {autorun:false}
students = [
    {"id": "S01", "name": "Mali", "score": 82},
    {"id": "S02", "name": "Niran", "score": 47},
    {"id": "S03", "name": "Ploy", "score": 75},
]

passed_names = [
    student["name"]
    for student in students
    if student["score"] >= 50
]
score_by_id = {
    student["id"]: student["score"]
    for student in students
}

print(passed_names)
print(score_by_id)
```

---
layout: center
class: concept
---

# Session 5 สรุป

<div class="pipeline">
  <div>List</div><div>Comprehension</div><div>Dictionary</div><div>Records</div>
</div>
