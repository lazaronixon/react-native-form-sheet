
Pod::Spec.new do |s|
  s.name         = "RNFormSheet"
  s.version      = "1.0.0"
  s.summary      = "RNFormSheet"
  s.description  = <<-DESC
                  RNFormSheet
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNFormSheet.git", :tag => "master" }
  s.source_files  = "RNFormSheet/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  