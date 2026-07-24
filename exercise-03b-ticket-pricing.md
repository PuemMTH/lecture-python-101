---
layout: default
class: ''
---

<div class="eyebrow">IPO Gate 3B · Multi-branch Conditions</div>

# ด่าน 3B: ราคาบัตรกิจกรรม

คำนวณราคาบัตรจากอายุ สถานะสมาชิก และวันจัดงาน โดยต้องตรวจ input ก่อนเลือกส่วนลด

<div class="grid2">
  <div class="card">
    <h3>กติกา</h3>
    <ul>
      <li>อายุติดลบถือว่า input ไม่ถูกต้อง</li>
      <li>อายุต่ำกว่า 6 ปีเข้าฟรี</li>
      <li>ราคาปกติ 100 บาท</li>
      <li>อายุอย่างน้อย 60 ปีลดเหลือ 70 บาท</li>
      <li>สมาชิกลดเพิ่ม 20 บาท</li>
      <li>วันหยุดคิดค่าบริการเพิ่ม 10 บาท</li>
    </ul>
  </div>
  <div class="card">
    <h3>ข้อกำหนด</h3>
    <ul>
      <li>ใช้ <code>if / elif / else</code></li>
      <li>ใช้ <code>and</code>, <code>or</code> อย่างน้อยหนึ่งครั้ง</li>
      <li>ราคาสุดท้ายต้องไม่ติดลบ</li>
      <li>แยก validation ออกจาก pricing</li>
    </ul>
  </div>
</div>

<div class="lab"><p>ทดสอบอย่างน้อย 6 กรณี: input ผิด, เด็ก, ผู้ใหญ่, ผู้สูงอายุ, สมาชิก และวันหยุด</p></div>
