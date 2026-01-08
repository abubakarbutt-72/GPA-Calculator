function percentageToGPA(p) {
    if (p >= 85) return 4.00;
    else if (p >= 80) return 3.70;
    else if (p >= 75) return 3.30;
    else if (p >= 70) return 3.00;
    else if (p >= 65) return 2.70;
    else if (p >= 61) return 2.30;
    else if (p >= 58) return 2.00;
    else if (p >= 55) return 1.70;
    else if (p >= 50) return 1.00;
    else return 0.00;
}

function calculateGPA() {
    let totalQP = 0;
    let totalCH = 0;

    function addSubject(m, s, f, ch) {
        let total = m + s + f;
        let gpa = percentageToGPA(total);
        totalQP += gpa * ch;
        totalCH += ch;
    }

    addSubject(+pf_mid.value, +pf_sess.value, +pf_final.value, 3);
    addSubject(+ict_mid.value, +ict_sess.value, +ict_final.value, 2);
    addSubject(+ds_mid.value, +ds_sess.value, +ds_final.value, 3);
    addSubject(+eng_mid.value, +eng_sess.value, +eng_final.value, 3);
    addSubject(+stat_mid.value, +stat_sess.value, +stat_final.value, 3);
    addSubject(+fq_mid.value, +fq_sess.value, +fq_final.value, 1); // FQ fixed

    addSubject(+pflab_sess.value, 0, +pflab_final.value, 1);
    addSubject(+ictlab_sess.value, 0, +ictlab_final.value, 1);

    let gpa = (totalQP / totalCH).toFixed(2);
    document.getElementById("result").innerText = "Overall GPA: " + gpa;
}
