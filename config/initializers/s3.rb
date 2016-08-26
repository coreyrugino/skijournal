CarrierWave.configure do |config|
  config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => "AKIAIRDPRKY3VJKHDJCQ",
      :aws_secret_access_key  => "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",
      :region                 => 'us-west-2' # Change this for different AWS region. Default is 'us-east-1'
  }
  config.fog_directory  = "entrypics"
end
