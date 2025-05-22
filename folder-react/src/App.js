import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Header */}
      <div className="top-rectangle">
        <div className="top-bar-content">
          <i className="fas fa-bars menu-bars"></i>
          <div className="right-content">
            <div className="top-icon-bar">
              <i className="far fa-compass"></i>
              <i className="far fa-comments"></i>
              <i className="far fa-bell"></i>
            </div>
            <div className="user-profile">
              <img
                src="https://cdn.ipb.ac.id/photo/G61_2022_G6401221022_MUHAMMAD%20AGAL%20LULANIKA_9a9603b212904c01a7ea964289914f96.jpg"
                alt="User"
                className="profile-pic"
              />
              <div className="user-info">
                <div className="user-name">MUHAMMAD AGAL LULANIKA</div>
                <div className="user-id">G6401221022</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Sidebar */}
      <div className="left-rectangle">
        <div className="sidebar-icons">
          <i className="fas fa-home sidebar-icon"></i>
          <i className="fas fa-book sidebar-icon"></i>
          <i className="fas fa-clipboard-list sidebar-icon"></i>
          <i className="fas fa-star sidebar-icon"></i>
          <i className="fas fa-comment sidebar-icon"></i>
          <i className="fas fa-user-graduate sidebar-icon"></i>
          <i className="fas fa-video sidebar-icon"></i>
          <i className="fas fa-graduation-cap sidebar-icon active"></i>
          <i className="fas fa-upload sidebar-icon"></i>
          <i className="fas fa-briefcase-medical sidebar-icon"></i>
          <i className="fas fa-car sidebar-icon"></i>
          <i className="fas fa-question-circle sidebar-icon"></i>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="content-wrapper">
        <h1 className="judul">
          Monitoring Tugas Akhir
        </h1>

        <div className="box-row">
          <div className="color-box blue">
            <div className="box-number">147</div>
            <div className="box-label">Mahasiswa Aktif</div>
          </div>
          <div className="color-box green">
            <div className="box-number">60</div>
            <div className="box-label">Mahasiswa</div>
          </div>
          <div className="color-box yellow">
            <div className="box-number">38</div>
            <div className="box-label">Mahasiswa</div>
          </div>
          <div className="color-box red">
            <div className="box-number">39</div>
            <div className="box-label">Mahasiswa</div>
          </div>
        </div>

        <div className="middle-box">
          <strong>Middle Box</strong>
        </div>

        <div className="tabel-container">
          <table className="tabel-mahasiswa">
            <thead>
              <tr>
                <th>No</th>
                <th>Tahun Semester</th>
                <th>Nama Mahasiswa</th>
                <th>NIM</th>
                <th>Topik Tugas Akhir</th>
                <th>Status Progress</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024/2025<br />Semester Genap</td>
                <td>Muhammad Agal Lulanika</td>
                <td>G650XXXXXX</td>
                <td>Analisis Sentimen pada Ulasan Produk E-Commerce</td>
                <td>
                  <span className="status green">
                    <i className="fas fa-check"></i> Sidang Komisi 1
                  </span>
                </td>
                <td className="aksi">
                  <button className="btn blue" aria-label="View">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn cyan" aria-label="Document">
                    <i className="fas fa-clipboard-list"></i>
                  </button>
                  <button className="btn green" aria-label="Next">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button className="btn red" aria-label="Reject">
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>2024/2025<br />Semester Genap</td>
                <td>Shafaya Sasikirana</td>
                <td>G650XXXXXX</td>
                <td>Sistem Pakar Diagnosa Penyakit Menggunakan Fuzzy</td>
                <td>
                  <span className="status yellow">
                    <i className="fas fa-exclamation-triangle"></i> Evaluasi dan Monitoring
                  </span>
                </td>
                <td className="aksi">
                  <button className="btn blue" aria-label="View">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn cyan" aria-label="Document">
                    <i className="fas fa-clipboard-list"></i>
                  </button>
                  <button className="btn green" aria-label="Next">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button className="btn red" aria-label="Reject">
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>2024/2025<br />Semester Genap</td>
                <td>Rio Alvein Hasana</td>
                <td>G650XXXXXX</td>
                <td>Aplikasi Peminjaman Buku Digital Berbasis Web</td>
                <td>
                  <span className="status green">
                    <i className="fas fa-check"></i> Sidang Komisi 2
                  </span>
                </td>
                <td className="aksi">
                  <button className="btn blue" aria-label="View">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn cyan" aria-label="Document">
                    <i className="fas fa-clipboard-list"></i>
                  </button>
                  <button className="btn green" aria-label="Next">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button className="btn red" aria-label="Reject">
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>2024/2025<br />Semester Genap</td>
                <td>Fadhil Mumtaz</td>
                <td>G650XXXXXX</td>
                <td>Analisis Data Penjualan Menggunakan Power BI</td>
                <td>
                  <span className="status red">
                    <i className="fas fa-times"></i> Seminar
                  </span>
                </td>
                <td className="aksi">
                  <button className="btn blue" aria-label="View">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn cyan" aria-label="Document">
                    <i className="fas fa-clipboard-list"></i>
                  </button>
                  <button className="btn green" aria-label="Next">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button className="btn red" aria-label="Reject">
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>2024/2025<br />Semester Genap</td>
                <td>T. Mochamad Rafly</td>
                <td>G650XXXXXX</td>
                <td>Penerapan Machine Learning dalam Prediksi Cuaca</td>
                <td>
                  <span className="status yellow">
                    <i className="fas fa-exclamation-triangle"></i> Proposal
                  </span>
                </td>
                <td className="aksi">
                  <button className="btn blue" aria-label="View">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn cyan" aria-label="Document">
                    <i className="fas fa-clipboard-list"></i>
                  </button>
                  <button className="btn green" aria-label="Next">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button className="btn red" aria-label="Reject">
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;