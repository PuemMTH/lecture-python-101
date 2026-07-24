---
layout: default
class: ''
---

<div class="eyebrow">IPO Gate 3C · Compound Conditions</div>

# ด่าน 3C: คัดเลือกทุนการศึกษา

เขียน function ตัดสินผลเป็น `invalid`, `not eligible`, `reserve` หรือ `approved`

<div class="grid2">
  <div class="card">
    <h3>ข้อมูลและกติกา</h3>
    <ul>
      <li><code>score</code> และ <code>attendance</code> ต้องอยู่ในช่วง 0–100</li>
      <li>ผ่านขั้นต่ำเมื่อคะแนน ≥ 80 และเข้าเรียน ≥ 80%</li>
      <li>อนุมัติเมื่อผ่านขั้นต่ำ และรายได้ ≤ 20,000 หรือมีกิจกรรม</li>
      <li>ถ้าผ่านขั้นต่ำแต่ยังไม่เข้าเกณฑ์อนุมัติ ให้เป็นสำรอง</li>
    </ul>
  </div>
  <div class="card">
    <h3>งานที่ต้องส่ง</h3>
    <ul>
      <li>ตั้งชื่อ subconditions อย่างน้อย 3 ตัว</li>
      <li>เขียน decision table ก่อนเขียน code</li>
      <li>อธิบายลำดับ branch</li>
      <li>ทดสอบ boundary และกรณีที่เงื่อนไขขัดกันอย่างน้อย 8 กรณี</li>
    </ul>
  </div>
</div>

<div class="lab"><p>ห้ามเขียน Boolean expression ยาวทั้งหมดในบรรทัด <code>if</code> เดียว</p></div>
