function allowDrop(ev) {
    ev.preventDefault();  // ป้องกันไม่ให้เกิดข้อผิดพลาดขณะลาก
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);  // เก็บข้อมูลของโมเลกุลที่ลาก
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");  // ดึงข้อมูลจากการลาก
    var molecule = document.getElementById(data);
    
    // เพิ่มโมเลกุลที่ถูกลากมาที่พื้นที่ปฏิกิริยา
    ev.target.appendChild(molecule);
    
    // เมื่อมีการวางโมเลกุลแล้ว แสดงผลลัพธ์ของปฏิกิริยา
    analyzeReaction();
}

function analyzeReaction() {
    const reactionArea = document.querySelector('.reaction-area');
    const molecules = reactionArea.children;

    if (molecules.length >= 2) {
        // ตรวจสอบการจับคู่ของโมเลกุลที่ถูกลาก
        if (document.getElementById('H2O') && document.getElementById('CO2') && document.getElementById('O2')) {
            document.getElementById('reaction-output').innerHTML = 'ปฏิกิริยาของน้ำ (H2O) และคาร์บอนไดออกไซด์ (CO2) ทำให้เกิดการปลดปล่อยพลังงาน!';
        } else {
            document.getElementById('reaction-output').innerHTML = 'ไม่สามารถสร้างปฏิกิริยาเคมีได้ กรุณาลองใหม่!';
        }
    } else {
        document.getElementById('reaction-output').innerHTML = 'กรุณาลากโมเลกุลเพื่อสร้างปฏิกิริยา';
    }
}
