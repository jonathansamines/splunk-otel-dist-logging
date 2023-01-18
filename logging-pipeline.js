'use strict';

const SplunkOtel = require('@splunk/otel');
const pino = require('pino');
const { DiagLogLevel, diag } = require('@opentelemetry/api');

diag.setLogger(pino(), DiagLogLevel.DEBUG);

delete process.env.OTEL_LOG_LEVEL;

SplunkOtel.start();
