
  Pod::Spec.new do |s|
    s.name = 'Epsonlibcapacitor'
    s.version = '0.0.1'
    s.summary = 'this is epson library for capacitor'
    s.license = 'MIT'
    s.homepage = 'https://github.com/raizaldi/epsonlibcapacitor.git'
    s.author = 'raizaldi'
    s.source = { :git => 'https://github.com/raizaldi/epsonlibcapacitor.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end