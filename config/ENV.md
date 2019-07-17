# Delaying API execution, waiting for external services and URLs
## `WAIT_FOR` (duration, default: 0)

Delays API startup for amount of time specified (10s, 2m...).
This delay happens BEFORE service probing.

## `WAIT_FOR_STATUS_PAGE` (bool, default: true)

Show temporary status web page.

## `WAIT_FOR_SERVICES` (string, default: "")
Space delimited list of hosts and/or URLs to probe.
Host format: `host` or `host:443` (port will default to `80).

Services are probed in parallel.

## `WAIT_FOR_SERVICES_TIMEOUT` (duration, default: 1m)

Max time for service probing.

## `WAIT_FOR_SERVICES_PROBE_TIMEOUT` (duration, default: 30s)

Timeout for each service probe.

## `WAIT_FOR_SERVICES_PROBE_INTERVAL` (duration, default: 5s)

Interval between service probes.
