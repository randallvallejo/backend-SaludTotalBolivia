import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
        map(data => {
        const response = context.switchToHttp().getResponse();
        
        const baseResponse = {
            status: 'success',
            code: response.statusCode,
            message: data.message || '',
            data: data.result || data,
            meta: {
            timestamp: new Date().toISOString(),
            ...(data.pagination && { pagination: data.pagination })
            }
        };

        if (baseResponse.data.message) delete baseResponse.data.message;
        if (baseResponse.data.pagination) delete baseResponse.data.pagination;
        
        return baseResponse;
        })
    );
    }
}