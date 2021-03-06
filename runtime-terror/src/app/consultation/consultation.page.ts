import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage implements OnInit {
  image: any;
  http: any;
  loadingCtrl: any;
  upload(str:any)
  {
    const formData = new FormData();

    this.image=str.target.files[0];

    formData.append('files[]', this.image);
    console.log(formData,this.image);
    this.http.post("http://localhost/test/test.php",formData)
    .subscribe((data:any)=>{
      console.log(data);
    })
    console.log(str);
  }
  
  
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
  // width: {ideal: 1024},
  // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  public ngOnInit(): void {
  WebcamUtil.getAvailableVideoInputs()
  .then((mediaDevices: MediaDeviceInfo[]) => {
  this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
  });
  }
  public triggerSnapshot(): void {
  this.trigger.next();
  }
  public toggleWebcam(): void {
  this.showWebcam = !this.showWebcam;
  }
  public handleInitError(error: WebcamInitError): void {
  this.errors.push(error);
  }
  public showNextWebcam(directionOrDeviceId: boolean|string): void {
  // true => move forward through devices
  // false => move backwards through devices
  // string => move to device with given deviceId
  this.nextWebcam.next(directionOrDeviceId);
  }
  public handleImage(webcamImage: WebcamImage): void {
  console.info('received webcam image', webcamImage);
  this.pictureTaken.emit(webcamImage);
  }
  public cameraWasSwitched(deviceId: string): void {
  console.log('active device: ' + deviceId);
  this.deviceId = deviceId;
  }
  public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<boolean|string> {
  return this.nextWebcam.asObservable();
  }

}
