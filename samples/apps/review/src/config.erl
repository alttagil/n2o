-module(config).
-compile(export_all).

log_level() -> info.
log_modules() -> % any
  [
    login,
    wf_convert,
    n2o_file,
    n2o_async,
    n2o_nitrogen,
    index
  ].
