import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor() { }
  textTop: string;
  textEnd: string;

  ngOnInit(): void {
    this.textTop = "Be_Agro es un proyecto que toma como enfoque la agricultura de nuestro país y optimizar los sistemas de riego para la siembra de arroz junto con la ayuda de Internet de las cosas (IoT). La ejecución del proyecto permite cultivar arroz en seco, por medio del riego subterráneo ahorrando hasta un 60% del agua que se pierde por métodos de riego tradicionales como la inundación por factores como la evaporación debido a altas temperaturas de algunas regiones de nuestro país. Además de ello mitigamos la propagación de mosquito debido a que no hay charcas donde se puedan reproducir.";
    this.textEnd = "El metodo de riego subterráneo aplicado en los cultivos de arroz no solo provee ahorro de agua, también para la productividad del campesino ya que con el modelo optimizado del sistema y ciclo de alimentación cerrado proporciona una gran ayuda automática que no requiere supervisión. Además los estudios demuestran que el sistema de riego convencional por inundación arroja una producción de 8 a 9 toneladas por hectárea, mientras que bajo el método de riego subterráneo la productividad aumenta de 13 a 14 por hectárea.";
  }

}
