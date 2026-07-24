---
theme: geist
colorSchema: auto
title: Python พื้นฐาน — Complete Course
author: Puem
transition: fade
lineNumbers: true
monaco: true
htmlAttrs:
  lang: th
src: ./session-01.md
---

---
layout: default
class: ''
---

<div class="eyebrow">IPO Gate 1 · ส่งก่อนเรียน Session 02</div>

# ด่าน 1: เครื่องคิดเงิน

ร้านขายเครื่องดื่มต้องการโปรแกรมรับ **ชื่อเมนู ราคาต่อแก้ว และจำนวนแก้ว** แล้วแสดงชื่อเมนู จำนวน และราคารวมเป็นประโยคที่อ่านง่าย

<div class="grid2">
  <div class="card"><h3>ข้อกำหนด</h3><ul><li>ราคารวม = ราคาต่อแก้ว × จำนวนแก้ว</li><li>รับข้อมูลจากผู้ใช้</li><li>แสดงผลด้วย f-string</li></ul></div>
  <div class="card"><h3>งานที่ต้องส่ง</h3><ul><li>เขียน Input · Process · Output</li><li>ยกตัวอย่างข้อมูลทดสอบ 2 ชุด</li><li>ระบุผลลัพธ์ที่คาดหวัง</li></ul></div>
</div>

<div class="lab"><p>ส่ง IPO ก่อนเขียน code · ผ่านแล้วจึงเริ่ม Session 02</p></div>

---
src: ./session-02.md
---

---
layout: default
class: ''
---

<div class="eyebrow">IPO Gate 2 · ส่งก่อนเรียน Session 03</div>

# ด่าน 2: Function ยอดสุทธิ

เขียนโปรแกรมรับ **ราคาสินค้า จำนวนชิ้น และส่วนลดเป็นเปอร์เซ็นต์** แล้วใช้ function คำนวณยอดก่อนลด จำนวนเงินที่ลด และยอดสุทธิ

<div class="grid2">
  <div class="card"><h3>ข้อกำหนด</h3><ul><li>แยก function คำนวณยอดสุทธิ</li><li>function ต้อง return ค่า</li><li>ยังไม่ต้องใช้เงื่อนไข</li></ul></div>
  <div class="card"><h3>งานที่ต้องส่ง</h3><ul><li>เขียน Input · Process · Output</li><li>กำหนดชื่อ function และ parameters</li><li>ยกตัวอย่างข้อมูลทดสอบ 2 ชุด</li></ul></div>
</div>

<div class="lab"><p>ส่ง IPO ก่อนเขียน code · ผ่านแล้วจึงเริ่ม Session 03</p></div>

---
src: ./session-03.md
---

---
layout: default
class: ''
---

<div class="eyebrow">IPO Gate 3 · ส่งก่อนเรียน Session 04</div>

# ด่าน 3: ค่าจัดส่ง

ร้านค้าใช้กติกา: น้ำหนักไม่เกิน 1 กก. ค่าส่ง 35 บาท, ไม่เกิน 3 กก. ค่าส่ง 50 บาท และมากกว่านั้นค่าส่ง 70 บาท; สมาชิกได้ส่วนลดค่าส่ง 10 บาท

<div class="grid2">
  <div class="card"><h3>ข้อกำหนด</h3><ul><li>ใช้ function และ return</li><li>เลือกค่าจัดส่งด้วย if / elif / else</li><li>ค่าส่งต้องไม่ติดลบ</li></ul></div>
  <div class="card"><h3>งานที่ต้องส่ง</h3><ul><li>เขียน Input · Process · Output</li><li>เขียนลำดับการตรวจเงื่อนไข</li><li>ทดสอบอย่างน้อย 4 กรณีรวมค่าขอบเขต</li></ul></div>
</div>

<div class="lab"><p>ส่ง IPO ก่อนเขียน code · ผ่านแล้วจึงเริ่ม Session 04</p></div>

---
src: ./session-04.md
---

---
layout: default
class: ''
---

<div class="eyebrow">IPO Gate 4 · ส่งก่อนเรียน Session 05</div>

# ด่าน 4: สรุปคะแนน

โปรแกรมรับคะแนนทีละค่าไปเรื่อย ๆ จนผู้ใช้กรอก `-1` แล้วแสดง **จำนวนคะแนน ผลรวม ค่าเฉลี่ย และจำนวนผู้ผ่านเกณฑ์ 50 คะแนน**

<div class="grid2">
  <div class="card"><h3>ข้อกำหนด</h3><ul><li>ใช้ -1 เป็น sentinel และไม่นำไปรวม</li><li>คะแนนจริงต้องอยู่ในช่วง 0–100</li><li>ห้ามหารเมื่อยังไม่มีคะแนน</li></ul></div>
  <div class="card"><h3>งานที่ต้องส่ง</h3><ul><li>เขียน Input · Process · Output</li><li>ระบุ accumulator และ counter</li><li>ทดสอบกรณีปกติ ค่าผิดช่วง และไม่มีคะแนน</li></ul></div>
</div>

<div class="lab"><p>ส่ง IPO ก่อนเขียน code · ผ่านแล้วจึงเริ่ม Session 05</p></div>

---
src: ./session-05.md
---

---
layout: default
class: ''
---

<div class="eyebrow">IPO Gate 5 · ส่งก่อนเรียน Session 06</div>

# ด่าน 5: สรุปข้อมูลนักเรียน

กำหนดข้อมูลนักเรียนเป็น list ของ dictionary แต่ละ record มี `name` และ `score` แล้วแสดงค่าเฉลี่ย รายชื่อผู้ผ่าน และชื่อนักเรียนที่ได้คะแนนสูงสุด

<div class="grid2">
  <div class="card"><h3>ข้อกำหนด</h3><ul><li>ใช้ list และ dictionary</li><li>ประมวลผลด้วย loop หรือ comprehension</li><li>รองรับ list ว่างโดยไม่เกิด error</li></ul></div>
  <div class="card"><h3>งานที่ต้องส่ง</h3><ul><li>เขียน Input · Process · Output</li><li>วาดตัวอย่างโครงสร้างข้อมูล 3 records</li><li>ทดสอบทั้งข้อมูลปกติและ list ว่าง</li></ul></div>
</div>

<div class="lab"><p>ส่ง IPO ก่อนเขียน code · ผ่านแล้วจึงเริ่ม Session 06</p></div>

---
src: ./session-06.md
---
