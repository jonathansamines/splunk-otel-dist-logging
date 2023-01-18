'use strict';

const SplunkOtel = require('@splunk/otel');
const { DiagLogLevel } = require('@opentelemetry/api');

SplunkOtel.start({
  logLevel: DiagLogLevel.NONE,
});
