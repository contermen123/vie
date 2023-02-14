function simpanKonsumen(form) {
	console.log(form);
	halamanKonsumen.inputKonsumen(form);
	halamanKonsumen.menampilkanHalamanKonsumen();
}
const halamanKonsumen = {
	konsumen: 
		index: -1
		nama: null
		alamat: null
		noHP: null
		email: null
	},
	daftarKonsumen: [],
	inputKonsumen: function (form) {
		this.konsumen.index = form.index.value;
		this.konsumen.nama = form.nama.value;
		this.konsumen.alamat = form.alamat.value;
		this.konsumen.noHP = form.noHP.value;
		this.konsumen.email = form.email.value;
		if(!this.konsumen.nama) {
			alert('nama tidak boleh kosong');
			return false
		}
		if(!this.konsumen.alamat) {
			alert('alamat tidak boleh kosong');
			return false
		}
		if(!this.konsumen.noHP) {
			alert('NoHP tidak boleh kosong');
			return false
		}
		if (!this.konsumen.email) {
			elert('email tidak boleh kosong');
			return false
		}

		if(this.konsumen.index == -1) {
			this.daftarKonsumen.push(copy(this.konsumen));
		} else {
			this.daftarKonsumen[this.konsumen.index] = copy(this.konsumen)
		}
		this.resetFormKonsumen(form);
	},

	resetFormKonsumen: function(form) {
		this.konsumen.nama = null;
		this.konsumen.alamat = null;
		this.konsumen.noHP = null;
		this.konsumen.email = null;
		this.konsumen.index = -1;

		form.nama.value = this.konsumen.nama;
		form.alamat.value = this.konsumen.alamat;
		form.noHP.value = this.konsumen.noHP;
		form.email.value = this.konsumen.email;
		form.index.value = this.konsumen.index;

		document.getElementById('btn-save-konsumen').innerHTML = "Simpan";
	},
	menampilkanHalamanKonsumen: function () {
		const componentHalamanKonsumen = document.getElementById('halaman-konsumen');
		componentHalamanKonsumen.innerHTML = '';
		this.daftarKonsumen.forEach((konsumen, index) => {
			componentHalamanKonsumen.innerHTML += `<p>${konsumen.nama} <br> ${konsumen.alamat} <br> ${konsumen.noHP} <br> ${konsumen.email} <button onclick="halamanKonsumen.editKonsumen(${index})">Edit</button><button onclick="halamanKonsumen.hapusKonsumen(${index})">Hapus</button><p>`;
		});
	},
	hapusKonsumen: function (index) {
		if(konfirm('Anda yakin?')) {
			this.halamanKonsumen.splice(index, 1);
			this.menampilkanHalamanKonsumen();
		}
	},
	editKonsumen: function (index) {
		const konsumen = this.daftarKonsumen[index];
		const form = document.getElementById('form-konsumen');
		form.nama.value = konsumen.nama;
		form.alamat.value = konsumen.alamat;
		form.noHP.value = konsumen.noHP;
		form.email.value = konsumen.email;
		form.index.value = index;
		document.getElementById('btn-save-konsumen').innerHTML = 'Edit';
	}
function copy(obj) {
	return JSON.parse(JSON.stringify(obj));
}
