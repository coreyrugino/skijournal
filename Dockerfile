iFROM ruby:2.2.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /skijournal
WORKDIR /skijournal
ADD Gemfile /skijournal/Gemfile
ADD Gemfile.lock /skijournal/Gemfile.lock
RUN bundle install
ADD . /skijournal
