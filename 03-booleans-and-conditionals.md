---
theme: geist
colorSchema: auto
title: Boolean และเงื่อนไข
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
layout: cover
class: concept
---

<div class="eyebrow">Python พื้นฐาน · Session 03</div>

# Boolean และเงื่อนไข

ให้โปรแกรมเลือกทางจากข้อมูล

---

<div class="eyebrow">Comparison</div>

# การเปรียบเทียบให้ผลเป็น Boolean

<div class="grid3">
  <div class="card"><h3>เท่ากัน</h3><p><code>==</code> · <code>!=</code></p></div>
  <div class="card"><h3>ลำดับ</h3><p><code>&lt;</code> · <code>&lt;=</code> · <code>&gt;</code> · <code>&gt;=</code></p></div>
  <div class="card"><h3>ช่วงค่า</h3><p><code>0 &lt;= score &lt;= 100</code></p></div>
</div>

```python {monaco-run} {autorun:false}
print(10 == 10)
print(7 != 3)
print(0 <= 82 <= 100)
```

<div class="takeaway"><p>Assignment <code>=</code> ต่างจาก comparison <code>==</code></p></div>

---

<div class="eyebrow">Strings</div>

# String ก็เปรียบเทียบลำดับได้

```python {monaco-run} {autorun:false}
print("apple" < "banana")
print("hello" > "goodbye")
print("Python" == "python")
```

<div class="takeaway"><p>ตัวพิมพ์เล็ก–ใหญ่มีผลต่อการเปรียบเทียบและเรียงลำดับ</p></div>

---

<div class="eyebrow">Boolean functions</div>

# ตั้งชื่อให้ function อ่านเหมือนคำถาม

```python {monaco-run} {autorun:false}
def is_even(number):
    return number % 2 == 0

def is_divisible(number, divisor):
    return divisor != 0 and number % divisor == 0

print(is_even(30))
print(is_divisible(30, 3))
```

<div class="takeaway"><p>ชื่อแบบ <code>is_...</code> หรือ <code>has_...</code> สื่อว่า function คืน True/False</p></div>

---

<div class="eyebrow">Logic</div>

# เชื่อมเงื่อนไขด้วย `and`, `or`, `not`

<div class="grid3">
  <div v-click class="card"><h3><code>and</code></h3><p>จริงเมื่อทุกเงื่อนไขจริง</p></div>
  <div v-click class="card"><h3><code>or</code></h3><p>จริงเมื่ออย่างน้อยหนึ่งเงื่อนไขจริง</p></div>
  <div v-click class="card"><h3><code>not</code></h3><p>กลับค่าความจริง</p></div>
</div>

<div class="takeaway"><p>ใช้วงเล็บเมื่อผสมหลายเงื่อนไข เพื่อให้เจตนาชัด</p></div>

---

<div class="eyebrow">Branching</div>

# `if / elif / else`

```python {monaco-run} {autorun:false}
temperature = 32

if temperature >= 35:
    print("very hot")
elif temperature >= 25:
    print("warm")
else:
    print("cool")
```

<div v-click class="takeaway"><p>Python ทำเฉพาะ branch แรกที่เป็นจริงใน chain เดียวกัน</p></div>

---

<div class="eyebrow">Condition Priority</div>

# ตรวจเงื่อนไขจากเกณฑ์

<div class="grid2">
  <div class="card green">
    <h3>ครอบคลุมทุกช่วงคะแนน</h3>
    <p>แต่ละคะแนนต้องตรงกับเกรดเพียงช่วงเดียว</p>
  </div>

  <div class="card green">
    <h3>ทดสอบค่าขอบเขต</h3>
    <p>ต่ำกว่าเกณฑ์ · เท่ากับเกณฑ์ · สูงกว่าเกณฑ์</p>
  </div>
</div>

```python
if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
```

---
layout: center
class: concept
---

# Session 3 สรุป

<div class="pipeline">
  <div>Comparison</div><div>Boolean logic</div><div>Branch</div><div>Validation</div>
</div>
