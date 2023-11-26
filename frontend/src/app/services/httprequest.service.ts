import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class HttpRequestService {
  constructor(private httpClient:HttpClient){}

  public httpGetRequest(url:string):Observable<any>{
    return this.httpClient.get(url);
  }

  public httpPostRequest(url:string,body:object):Observable<any>{
    return this.httpClient.post(url,body);
  }

  public httpPutRequest(url:string,body:object):Observable<any>{
    return this.httpClient.put(url,body);
  }

  public httpDeleteRequest(url:string,body:object):Observable<any>{
    return this.httpClient.delete(url,{body:body});
  }

  public httpPatchRequest(url:string,body:object):Observable<any>{
    return this.httpClient.patch(url,body);
  }
}
