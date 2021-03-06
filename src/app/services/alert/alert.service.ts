import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert: HTMLIonAlertElement

  constructor(public alertController: AlertController) { }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Oops ..',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm(message) {
    return new Promise(async (resolve: any) => {
      this.alert = await this.alertController.create({
        header: 'Confirm.',
        message: message,
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              resolve('ok');
            }
          },
          {text: 'No', role: 'cancel'}
        ]
      });
      await this.alert.present();
    })

  }
}
