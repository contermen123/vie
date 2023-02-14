
    // function simpanTransaksi(form) {
    //     console.log(form);
    //     daftartransaksi.inputTransaksi(form);
    //     daftartransaksi.menampilkanDaftarTransaksi();
    // }
    // const daftartransaksi = {
    //     transaksi: {
    //         index: -1,
    //         produk: null,
    //         harga: null,
    //         stok: null,
    //         gambar: null,
    //         jumlah: null,
    //         total: null,
    //         tunai: null,
    //         kembalian: null
    //     },
    //     daftarTransaksi: [],
    //     inputTransaksi: function (form) {
    //         this.transaksi.index = form.index.value;
    //         this.transaksi.produk = form.produk.value;
    //         this.transaksi.harga = form.harga.value;
    //         this.transaksi.stok = form.stok.value;
    //         this.transaksi.gambar = form.gambar.value;
    //         this.transaksi.jumlah = form.jumlah.value;
    //         this.transaksi.total = form.total.value;
    //         this.transaksi.tunai = form.tunai.value;
    //         this.transaksi.kembalian = form.kembalian.value;
    
    //         if(!this.transaksi.produk) {
    //             alert('produk tidak boleh kosong');
    //             return false
    //         }
    //         if(!this.transaksi.harga) {
    //             alert('harga tidak boleh kosong');
    //             return false
    //         }
    //         if(!this.transaksi.stok) {
    //             alert('stok tidak boleh kosong');
    //             return false
    //         }
    //         if(!this.transaksi.gambar) {
    //             alert('link gambar tidak boleh kosong');
    //             return false
    //         }
    //         if(!this.transaksi.jumlah) {
    //             alert('link jumlah tidak boleh kosong');
    //             return false
    //         }
    //         if(!this.transaksi.total) {
    //             alert('link total tidak boleh kosong');
    //             return false
    //         }
    //         if(!this.transaksi.tunai) {
    //             alert('link tunai tidak boleh kosong');
    //             return false
    //         }
    //         if(!this.transaksi.kembalian) {
    //             alert('link kembalian tidak boleh kosong');
    //             return false
    //         }
            
    //         if(this.transaksi.index == -1) {
    //             this.daftarTransaksi.push(copy(this.transaksi));
    //         } else {
    //             this.daftarTransaksi[this.transaksi.index] = copy(this.transaksi)
    //         }
    //         this.resetFormTransaksi(form);
    //     },
        
    //     resetFormTransaksi: function(form) {
    //         this.transaksi.produk =null;
    //         this.transaksi.harga = null;
    //         this.transaksi.stok = null;
    //         this.transaksi.gambar = null;
    //         this.transaksi.jumlah = null;
    //         this.transaksi.total = null;
    //         this.transaksi.tunai = null;
    //         this.transaksi.kembalian = null;
    //         this.transaksi.index = -1;
    
    //         form.produk.value = this.transaksi.produk;
    //         form.harga.value = this.transaksi.harga;
    //         form.stok.value = this.transaksi.stok;
    //         form.gambar.value = this.transaksi.gambar;
    //         form.jumlah.value = this.transaksi.jumlah;
    //         form.total.value = this.transaksi.total;
    //         form.tunai.value = this.transaksi.tunai;
    //         form.kembalian.value = this.transaksi.kembalian;
    //         form.index.value = this.transaksi.index;
    
    //         document.getElementById('btn-save-transaksi').innerHTML = 'Simpan';
    //     },
    //     menampilkanDaftarTransaksi: function () {
    //         const componentDaftarTransaksi = document.getElementById('daftar-transaksi');
    //         componentDaftarTransaksi.innerHTML = '';
    //         this.daftarTransaksi.forEach((transaksi, index) => {
    //             componentDaftarTransaksi.innerHTML +=  `<h4>${transaksi.produk} <br> ${transaksi.harga} <br> stok: ${transaksi.stok} <br> Jumlah: ${transaksi.jumlah}  <br> Total Harga: ${transaksi.total} <br> <img src="${transaksi.gambar}" width= "100px"></h4>`;
    //         });
    //     },
       
    // }
    
    //  function copy(obj) {
    //         return JSON.parse(JSON.stringify(obj));
    //     }


//     function simpanTransaksi(form) {
//         console.log(form);
//         daftartransaksi.inputTransaksi(form);
//         daftartransaksi.menampilkanDaftarTransaksi();
//     }
//     const daftarTransaksi = {
//         transaksi: {
//             index: -1,
//             produk: null,
//             harga: null,
//             stok: null,
//             gambar: null,
//             jumlah: null,
//             total: null,
//             tunai: null,
//             kembalian: null
//         },
//         transaksiPenjual[],
//         inputTransaksi: function (form) {
//            this.transaksi.index = form.index.value;
//             this.transaksi.produk = form.produk.value;
//             this.transaksi.harga = form.harga.value;
//             this.transaksi.stok = form.stok.value;
//             this.transaksi.gambar = form.gambar.value;
//             this.transaksi.jumlah = form.jumlah.value;
//             this.transaksi.total = form.total.value;
//             this.transaksi.tunai = form.tunai.value;
//             this.transaksi.kembalian = form.kembalian.value;
    
//             if(!this.transaksi.produk) {
//                 alert('produk tidak boleh kosong');
//                 return false
//             }
//             if(!this.transaksi.harga) {
//                 alert('harga tidak boleh kosong');
//                 return false
//             }
//             if(!this.transaksi.stok) {
//                 alert('stok tidak boleh kosong');
//                 return false
//             }
//             if(!this.transaksi.gambar) {
//                 alert('link gambar tidak boleh kosong');
//                 return false
//             }
//             if(!this.transaksi.jumlah) {
//                 alert('link jumlah tidak boleh kosong');
//                 return false
//             }
//             if(!this.transaksi.total) {
//                 alert('link total tidak boleh kosong');
//                 return false
//             }
//             if(!this.transaksi.tunai) {
//                 alert('link tunai tidak boleh kosong');
//                 return false
//             }
//             if(!this.transaksi.kembalian) {
//                 alert('link kembalian tidak boleh kosong');
//                 return false
//             }

//             if (this.transaksi.index == -1) {
//                 this.transaksiPenjual.push(copy(this.transaksi));
//             } else {
//                 this.transaksiPenjual[this.transaksi.index] = copy(this.transaksi)
//             }
//             this.resetFormTransaksi: function(form) {
//                  this.transaksi.produk =null;
//             this.transaksi.harga = null;
//             this.transaksi.stok = null;
//             this.transaksi.gambar = null;
//             this.transaksi.jumlah = null;
//             this.transaksi.total = null;
//             this.transaksi.tunai = null;
//             this.transaksi.kembalian = null;
//             this.transaksi.index = -1;
    
//             form.produk.value = this.transaksi.produk;
//             form.harga.value = this.transaksi.harga;
//             form.stok.value = this.transaksi.stok;
//             form.gambar.value = this.transaksi.gambar;
//             form.jumlah.value = this.transaksi.jumlah;
//             form.total.value = this.transaksi.total;
//             form.tunai.value = this.transaksi.tunai;
//             form.kembalian.value = this.transaksi.kembalian;
//             form.index.value = this.transaksi.index;
    
//             document.getElementById('btn-save-transaksi').innerHTML = 'Simpan';
//         },
//         menampilkanDaftarTransaksi: function () {
//             const componentDaftarTransaksi = document.getElementById('daftar-transaksi');
//             componentDaftarTransaksi.innerHTML = '';
//             this.transaksiPenjual.forEach((transaksi, index) => {
//                 componentDaftarTransaksi.innerHTML +=  `<h4>${transaksi.produk} <br> ${transaksi.harga} <br> stok: ${transaksi.stok} <br> Jumlah: ${transaksi.jumlah}  <br> Total Harga: ${transaksi.total} <br> <img src="${transaksi.gambar}" width= "100px"></h4>`;
//             });
//         },
//     }

//     function copy(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }