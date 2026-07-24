---
theme: geist
colorSchema: auto
title: List และ Dictionary
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

# List และ Dictionary

เก็บหลายค่า และจัดข้อมูลให้มีโครงสร้าง

---

<div class="eyebrow">Sequence</div>

# List มีลำดับและแก้ไขได้

```python {monaco-run} {autorun:false}
empty = []
mixed = [8, 2.1, "Hello", True]
letters = list("Hello")
odd_numbers = [1, 3, 5, 7, 9]

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

# Search · Aggregate

<div class="grid2">
  <div class="card"><h3>Search</h3><p>หา value หรือดูว่าพบหรือไม่</p></div>
  <div class="card"><h3>Aggregate</h3><p>รวมหลายค่าเป็นผลเดียว</p></div>
</div>

```python {monaco-run} {autorun:false}
scores = [72, 88, 41, 95, 67]
print(88 in scores)
print(len(scores), sum(scores), min(scores), max(scores))
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
layout: center
class: concept
---

# Session 4 สรุป

<div class="pipeline">
  <div>List</div><div>Mutation</div><div>Dictionary</div><div>Records</div>
</div>
