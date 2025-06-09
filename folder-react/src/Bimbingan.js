import React, { useState } from 'react';
import { FaHome, FaGraduationCap, FaBook, FaClipboardList, FaStar, FaComment, FaUser, FaVideo, FaUpload, FaBriefcaseMedical, FaCar, FaQuestionCircle, FaBars, FaCompass, FaComments, FaBell } from 'react-icons/fa';

function TambahBimbingan() {
  const [formData, setFormData] = useState({
    tahunSemester: '',
    namaKegiatan: '',
    deskripsi: '',
    waktuKegiatan: '',
    durasi: 0,
    tipePenyelenggaraan: 'Hybrid',
    pembimbing: '',
    url: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Di sini biasanya ada logika untuk mengirim data ke backend
    alert('Bimbingan berhasil ditambahkan!');
  };

  return (
    <div style={styles.app}>
      {/* Top Header */}
      <div style={styles.topRectangle}>
        <div style={styles.topBarContent}>
          <FaBars style={styles.menuBars} />
          <div style={styles.rightContent}>
            <div style={styles.topIconBar}>
              <FaCompass style={styles.topIcon} />
              <FaComments style={styles.topIcon} />
              <FaBell style={styles.topIcon} />
            </div>
            <div style={styles.userProfile}>
              <img
                src="https://cs.ipb.ac.id/wp-content/uploads/2021/10/ANN-225x300.jpg"
                alt="User"
                style={styles.profilePic}
              />
              <div style={styles.userInfo}>
                <div style={styles.userName}>Dr.Eng. Annisa, S.Kom., M.Kom.</div>
                <div style={styles.userId}>196011261986012001</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Sidebar */}
      <div style={styles.leftRectangle}>
        <div style={styles.sidebarIcons}>
          <div style={styles.sidebarIconContainer}>
            <FaHome style={styles.sidebarIcon} />
          </div>
          
          <div style={styles.iconGroup}>
            <div style={styles.sidebarIconContainer}>
              <FaBook style={styles.sidebarIcon} />
            </div>
            <div style={styles.sidebarIconContainer}>
              <FaClipboardList style={styles.sidebarIcon} />
            </div>
          </div>
          
          <div style={styles.sidebarIconContainer}>
            <FaStar style={styles.sidebarIcon} />
          </div>
          <div style={styles.sidebarIconContainer}>
            <FaComment style={styles.sidebarIcon} />
          </div>
          <div style={styles.sidebarIconContainer}>
            <FaUser style={styles.sidebarIcon} />
          </div>
          <div style={styles.sidebarIconContainer}>
            <FaVideo style={styles.sidebarIcon} />
          </div>
          <div style={{...styles.sidebarIconContainer, ...styles.activeIconContainer}}>
            <FaGraduationCap style={{ ...styles.sidebarIcon, ...styles.activeSidebarIcon }} />
          </div>
          <div style={styles.sidebarIconContainer}>
            <FaUpload style={styles.sidebarIcon} />
          </div>
          <div style={styles.sidebarIconContainer}>
            <FaBriefcaseMedical style={styles.sidebarIcon} />
          </div>
          <div style={styles.sidebarIconContainer}>
            <FaCar style={styles.sidebarIcon} />
          </div>
          <div style={styles.sidebarIconContainer}>
            <FaQuestionCircle style={styles.sidebarIcon} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.contentWrapper}>
        <div style={styles.headerContainer}>
          <h1 style={styles.judul}>Tambah Bimbingan</h1>
        </div>

        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {/* Gambaran Kegiatan */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Gambaran Kegiatan</h2>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Tahun Semester</label>
                <select 
                  name="tahunSemester"
                  value={formData.tahunSemester}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="">-- Pilih --</option>
                  <option value="2024/2025 Semester Genap">2024/2025 Semester Genap</option>
                  <option value="2024/2025 Semester Ganjil">2024/2025 Semester Ganjil</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Nama Kegiatan<span style={styles.requiredStar}>*</span>
                </label>
                <input 
                  type="text"
                  name="namaKegiatan"
                  placeholder="Judul/nama kegiatan yang dilkuti"
                  value={formData.namaKegiatan}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Deskripsi Kegiatan<span style={styles.requiredStar}>*</span>
                </label>
                <textarea 
                  name="deskripsi"
                  placeholder="Mencakup gambaran kegiatan, capatan pembelajaran, tujuan/manfaat yang diperoleh, kompetensi yang dikuasai setelah mengikuti kegiatan"
                  value={formData.deskripsi}
                  onChange={handleChange}
                  style={{...styles.input, height: '100px'}}
                  required
                />
              </div>
            </div>
            
            {/* Divider */}
            <hr style={styles.divider} />
            
            {/* Waktu dan Tempat */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Waktu dan Tempat</h2>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Waktu Kegiatan<span style={styles.requiredStar}>*</span>
                </label>
                <input 
                  type="date" 
                  name="waktuKegiatan"
                  value={formData.waktuKegiatan}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Durasi Jam Kegiatan<span style={styles.requiredStar}>*</span>
                </label>
                <div style={styles.durationContainer}>
                  <input 
                    type="number" 
                    name="durasi"
                    min="0"
                    value={formData.durasi}
                    onChange={handleChange}
                    style={{...styles.input, width: '80px'}}
                    required
                  />
                  <span style={styles.durationLabel}>Jam</span>
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Tipe Penyelenggaraan<span style={styles.requiredStar}>*</span>
                </label>
                <select 
                  name="tipePenyelenggaraan"
                  value={formData.tipePenyelenggaraan}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="Hybrid">Hybrid</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </select>
              </div>
            </div>
            
            {/* Divider */}
            <hr style={styles.divider} />
            
            {/* Pembimbing Kegiatan */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Pembimbing Kegiatan</h2>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Pembimbing IPB<span style={styles.requiredStar}>*</span>
                </label>
                <select 
                  name="pembimbing"
                  value={formData.pembimbing}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="">-- Pilih Dosen --</option>
                  <option value="Dr. Eng. Annisa, S.Kom, M.Kom">Dr. Eng. Annisa, S.Kom, M.Kom</option>
                  <option value="Dr Sony Hartono Wijaya, S.Kom, M.Kom">Dr Sony Hartono Wijaya, S.Kom, M.Kom</option>
                </select>
              </div>
            </div>
            
            {/* Divider */}
            <hr style={styles.divider} />
            
            {/* Dokumen Pendukung */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Dokumen Pendukung</h2>
              
              <table style={styles.documentTable}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>
                      Name<span style={styles.requiredStar}>*</span>
                    </th>
                    <th style={styles.tableHeader}>
                      File<span style={styles.requiredStar}>*</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.tableCell}>
                      Sertifikat Kegiatan, LOA, Laporan Kegiatan, Photo/Dokumentasi Kegiatan, dll
                    </td>
                    <td style={styles.tableCell}>
                      <label htmlFor="file-upload" style={styles.fileUploadButton}>
                        Choose File
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                      <span style={styles.fileName}>
                        {formData.file ? formData.file.name : 'No file chosen'}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Url yang merujuk kepada informasi kegiatan (website, media social, drive, dll)
                </label>
                <input 
                  type="text" 
                  name="url"
                  placeholder="Masukkan URL"
                  value={formData.url}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              
              <p style={styles.fileNote}>
                Maksimum upload: 10MB. Jika lebih, upload ke tempat lain dan masukkan alamatnya pada bagian Link.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div style={styles.actionButtons}>
              <button 
                type="button" 
                style={styles.cancelButton}
                onClick={() => console.log('Cancel clicked')}
              >
                Batal
              </button>
              <button 
                type="submit" 
                style={styles.submitButton}
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#F3F4FF',
    position: 'relative',
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
  },
  topRectangle: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '53px',
    backgroundColor: 'white',
    zIndex: 1100,
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
  },
  topBarContent: {
    height: '100%',
    marginLeft: '92.7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
  menuBars: {
    marginRight: 'auto',
    fontSize: '20px',
    color: '#7F7F7F',
    cursor: 'pointer',
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  topIconBar: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  topIcon: {
    fontSize: '23px',
    color: '#7F7F7F',
    cursor: 'pointer',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  profilePic: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  userName: {
    fontWeight: 'bold',
    color: '#7F7F7F',
    fontSize: '16px',
    fontFamily: "'Poppins', sans-serif",
  },
  userId: {
    fontWeight: 'lighter',
    color: '#7F7F7F',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
  },
  leftRectangle: {
    position: 'fixed',
    top: '53px',
    left: 0,
    width: '64px',
    height: 'calc(100vh - 53px)',
    backgroundColor: 'white',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
    zIndex: 1000,
  },
  sidebarIcons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    width: '100%',
  },
  sidebarIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  activeIconContainer: {
    background: 'linear-gradient(to right, #3a00ff, #3183ff)',
  },
  sidebarIcon: {
    fontSize: '18px',
    color: '#334a40',
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    width: '100%',
  },
  activeSidebarIcon: {
    color: 'white',
  },
  contentWrapper: {
    marginLeft: '92.7px',
    padding: '92.7px 20px 20px 20px',
    maxWidth: 'calc(100% - 92.7px)',
  },
  headerContainer: {
    marginBottom: '20px',
    paddingLeft: '0px',
  },
  judul: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#343A40',
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  section: {
    marginBottom: '25px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#263C92',
    marginBottom: '15px',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '8px',
    fontFamily: "'Poppins', sans-serif",
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
    fontFamily: "'Poppins', sans-serif",
  },
  requiredStar: {
    color: '#FF0000',
    marginLeft: '4px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
    fontFamily: "'Poppins', sans-serif",
    '&:focus': {
      outline: 'none',
      borderColor: '#3a00ff',
    },
  },
  select: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
  },
  divider: {
    border: 'none',
    borderTop: '1px dashed #ddd',
    margin: '30px 0',
  },
  documentTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
  },
  tableHeader: {
    textAlign: 'left',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
    fontWeight: '600',
    color: '#333',
    fontFamily: "'Poppins', sans-serif",
  },
  tableCell: {
    padding: '12px 0',
    borderBottom: '1px solid #eee',
    verticalAlign: 'middle',
    fontFamily: "'Poppins', sans-serif",
  },
  fileUploadButton: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s',
    fontFamily: "'Poppins', sans-serif",
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  fileName: {
    fontSize: '14px',
    marginLeft: '10px',
    color: '#666',
    fontFamily: "'Poppins', sans-serif",
  },
  fileNote: {
    fontSize: '12px',
    color: '#666',
    marginTop: '5px',
    fontStyle: 'italic',
    fontFamily: "'Poppins', sans-serif",
  },
  durationContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  durationLabel: {
    fontSize: '14px',
    color: '#555',
    fontFamily: "'Poppins', sans-serif",
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginTop: '30px',
  },
  cancelButton: {
    padding: '12px 25px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s',
    fontFamily: "'Poppins', sans-serif",
    '&:hover': {
      backgroundColor: '#5a6268',
    },
  },
  submitButton: {
    padding: '12px 25px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s',
    fontFamily: "'Poppins', sans-serif",
    '&:hover': {
      backgroundColor: '#2563eb',
    },
  },
};

export default TambahBimbingan;