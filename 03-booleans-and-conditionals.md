---
theme: geist
colorSchema: light
title: Boolean และเงื่อนไข
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
routeAlias: conditions
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

<div class="eyebrow">Compound conditions</div>

# แยกเงื่อนไขซับซ้อนเป็น Boolean ที่ตั้งชื่อได้

```python {monaco-run} {autorun:false}
score = 86
attendance = 92
family_income = 18_000
has_activity = True

academic_ok = score >= 80 and attendance >= 80
needs_support = family_income <= 20_000
has_merit = score >= 90 or has_activity
eligible = academic_ok and (needs_support or has_merit)

print("eligible:", eligible)
```

<div class="takeaway"><p>ตั้งชื่อ subconditions ก่อนรวมด้วย <code>and</code>, <code>or</code>, <code>not</code> เพื่อลดวงเล็บซ้อนและตรวจทีละส่วนได้</p></div>

---

<div class="eyebrow">Branch ordering</div>

# Validate → Special Case → General Case → Fallback

```python {monaco-run} {autorun:false}
age = 68
is_member = True
is_weekend = False

if age < 0:
    price = None
elif age < 6:
    price = 0
elif age >= 60 and is_member:
    price = 40
elif age >= 60 or is_member:
    price = 60
else:
    price = 100

if price is None:
    print("Invalid age")
else:
    print(f"Ticket: {price} baht")
```

<div class="takeaway"><p>วางกรณีที่เฉพาะกว่าไว้ก่อน เพราะ Python เลือก branch แรกที่เป็นจริง</p></div>

---
layout: center
class: summary-slide
---

<div class="eyebrow">Session 03 · Recap</div>

# จากเงื่อนไขจริง–เท็จ<br>สู่การตัดสินใจของโปรแกรม

<div class="summary-map">
  <div class="summary-step">
    <span>01</span><strong>Comparison</strong><small>เปรียบเทียบค่าให้ได้ Boolean</small>
  </div>
  <div class="summary-step">
    <span>02</span><strong>Boolean Logic</strong><small>รวมเงื่อนไขด้วย and, or และ not</small>
  </div>
  <div class="summary-step">
    <span>03</span><strong>Branch</strong><small>เลือกเส้นทางด้วย if, elif และ else</small>
  </div>
  <div class="summary-step">
    <span>04</span><strong>Validation</strong><small>กันข้อมูลผิดก่อนเริ่มคำนวณ</small>
</div>
</div>

<div class="summary-result"><span>MENTAL MODEL</span> <code>condition → branch</code> <span class="summary-copy">= ข้อมูลเป็นตัวกำหนดเส้นทางของโปรแกรม</span></div>
