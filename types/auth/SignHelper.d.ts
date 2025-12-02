// Auto-generated typings for auth/SignHelper
declare const SignHelper: {
  createAuthorizationHeader(
    accessKey: string,
    secretKey: string,
    requestHeaders: Record<string, string>,
    httpMethod: string,
    path: string,
    payload: any,
    region: string,
    service: string,
    timestamp: number | string | Date
  ): string;
  createAuthorizationHeaders(
    timestamp: number | string | Date,
    accessKey: string,
    region: string,
    service: string,
    signedHeaders: string,
    signature: string
  ): string;
  createCanonicalRequest(
    method: string,
    pathname: string,
    query: Record<string, any>,
    headers: Record<string, any>,
    payload: any
  ): string;
  createCanonicalQueryString(params: Record<string, any>): string;
  createCanonicalHeaders(headers: Record<string, any>): string;
  createSignedHeaders(headers: Record<string, any>): string;
  createCredentialScope(time: number | string | Date, region: string, service: string): string;
  createStringToSign(time: number | string | Date, region: string, service: string, request: string): string;
  createSignature(
    secret: string,
    time: number | string | Date,
    region: string,
    service: string,
    stringToSign: string
  ): string;
  toAmzDate(time: number | string | Date): string;
};
export default SignHelper;
