# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_DadsSite_session',
  :secret      => 'dd5fe7eedd86d05afe9fb605f4ca3f50ba00c68f4920f348d20c6b71655bcb274a0fe9ff8f2904b86721a0ffb6cac9d2fbfd510932ac868c8d839dde42d1f161'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
