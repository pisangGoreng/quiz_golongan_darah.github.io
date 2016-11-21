
      var nama            = document.getElementById("form1").nama.value;
      var golongan_darah  = document.getElementById("form1").select.value;
      var output          = document.getElementById("output");
      var data_pengunjung = [];
      data_pengunjung.push( nama, golongan_darah );

    function golongan_darah_a ( nama ) {
      if ( nama == "") {
        return "Silahkan isi nama kamu terlebih dahulu";
      } else {
        var kata = "halo " + nama + " , golongan darah A di percaya memiliki sifat terorganisir, konsisten, sangat mudah bekerja sama tapi selalu cemas (terlalu perfeksionis) sehingga mudah membuat orang lain tidak suka." + "<br>" + "Mereka juga  diketahui memiliki ketenangan saat situasi kritis bahkan saat semua orang panik. Namun, mereka cenderung menghindari konfrontasi dan tidak nyaman di dekat orang yang tidak cocok." + "<br>" + "Golongan darah A yang pemalu, cenderung sangat sopan. Tapi semua orang dengan golongan darah A memiliki kesamaan yaitu tidak pernah benar-benar merasa cocok dengan orang lain. Mereka sangat bertanggung jawab. Jika ada pekerjaan yang harus dilakukan, mereka lebih memilih untuk mengurus sendiri. Mereka termasuk orang-orang mendambakan kesuksesan dan perfeksionis.";
      return kata;
      }
    };

    function golongan_darah_b ( nama ) {
      if ( nama == "") {
        return "Silahkan isi nama kamu terlebih dahulu";
      } else {
        var kata = "halo " + nama + " , golongan darah tipe B berkarakter paling santai. Mereka cenderung kurang kooperatif karena lebih suka mengikuti aturan dan ide-ide mereka sendiri. Mereka adalah individualis. Memperhatikan pikiran mereka lebih sedikit daripada perasaan mereka.Oleh sebab itu terkadang tampak dingin dan serius. Orang dengan darah tipe B sering dianggap tidak konvensional daripada jenis golongan darah lainnya. ";
      return kata;
      }
    }

    function golongan_darah_o ( nama ) {
      if ( nama == "") {
        return "Silahkan isi nama kamu terlebih dahulu";
      } else {
        var kata = "halo " + nama + " , golongan darah O orang yang terbuka, enerjik dan sosial. Mereka yang paling fleksibel dibandingkan dengan semua golongan darah. " + "<br>" + " Mereka mudah memulai proyek tetapi sering mengalami kesulitan berikutnya karena mereka mudah menyerah. Mereka bertingkah dan tidak terlalu dapat diandalkan. Golongan darah O selalu mengatakan apa yang ada di pikiran mereka." + "<br>" + " Mereka menghargai pendapat orang lain dan suka menjadi pusat perhatian. Juga, orang dengan darah O sangat percaya diri. ";
      return kata;
      }
    }

    function golongan_darah_ab ( nama ) {
      if ( nama == "") {
        return "Silahkan isi nama kamu terlebih dahulu";
      } else {
        var kata = "halo " + nama + " , golongan darah AB sulit diprediksi. Mereka dapat memiliki karakteristik di kedua ujung spektrum pada waktu yang sama. Misalnya, mereka bisa pemalu dan bisa tiba-tiba sebaliknya. Mereka dengan mudah beralih dari satu berlawanan dengan yang lain. " + "<br>" + " Orang yang dapat dipercaya dan bertanggung jawab, tetapi tidak dapat menangani terlalu banyak. Mereka tidak keberatan membantu asalkan kondisi mereka sendiri mampu. Orang dengan tipe darah ini tertarik dalam seni dan metafisika." + "<br>" + " AB dianggap sebagai tipe darah terburuk di Jepang. Mereka hengkang dari pekerjaan ketika terdapat hal-hal tidak memenuhi harapan mereka. Dikenal sensitif dan ingin mendapat perhatian untuk mengimbangi kekurangan dari jenis darahnya. ";
      return kata;
      }
    }


      if ( golongan_darah == "a") {
          output.innerHTML = golongan_darah_a ( nama );
      } else if ( golongan_darah == "b" ) {
        output.innerHTML = golongan_darah_b ( nama );
      } else if ( golongan_darah == "o" ) {
        output.innerHTML = golongan_darah_o ( nama );
      } else {
        output.innerHTML = golongan_darah_ab ( nama );
      }
    }


