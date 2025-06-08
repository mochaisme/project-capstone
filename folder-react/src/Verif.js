// VerificationTimeline.js
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Tambahkan impor ini

const VerificationTimeline = () => {
  // ... (kode yang Anda berikan)
  
  // Di dalam return, ganti ikon edit
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>
          Status Verifikasi
          <span style={styles.statusBadge}>
            {currentConfig.label}
          </span>
        </h3>
        <a href="#" style={styles.editButton}>
          <FaEdit style={{ marginRight: '5px' }} /> {/* Ganti ikon disini */}
          Edit Timeline
        </a>
      </div>
      {/* ... bagian lainnya tetap sama */}
    </div>
  );
};

export default VerificationTimeline;