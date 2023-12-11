import express, {Express, Request, Response} from 'express';
import {AvailableResolutions,
    CreateVideoType,
    ErrorType,
    RequestWithBody,
    StatusCode,
    VideoDbType} from './models/common';

export const app: Express = express();