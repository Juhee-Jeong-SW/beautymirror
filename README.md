# 라즈베리 파이를 이용한 퍼스널 컬러 진단 '뷰티미러'
## 작품 소개

- 퍼스널컬러(Personal Color)란 색채학에서 파생된 언어로, 사람의 머리카락, 눈동자, 피부톤 등을 조합하여 개개인에게 가장 어울리는 색상을 말한다.

- 퍼스널컬러 진단은 적게는 4가지에서 많게는 20여개까지 다르게 진단이 가능하며, 진단과정에서도 주관성과 여러 환경적인 조건때문에 정확성이 떨어짐을 알 수 있다. 
 
- 퍼스널컬러의 활용은 겉으로 보여지는 인상뿐만 아니라 개인의 생활패턴, 심리상태, 바이오리듬에도 영향을 주어 보다 풍요롭고 안정된 삶을 가능하게 한다. 윗 기능을 가진 퍼스널 컬러를 최대한 활용하는 것을 돕기위해 이러한 프로젝트를 수행하고자 한다.

## 작품 특.장점

- ‘뷰티미러’ 는 PCCS 색체계를 기반으로 하지만, 정확성과 규칙성을 높이기 위해 한 톤을 도출하는데 각 3개의 색상테이블을 이용한다.

- ‘뷰티미러’ 는 사용자의 수동적인 입력없이 자동으로 필요한 서비스를 제공한다. 

- ‘뷰티미러’ 는 피부영역을 자동으로 인식하고 퍼스널컬러 분류시 미묘한 오류를 최소화하는 알고리즘을 이용한다.


## 작품 기능

### SW
- 퍼스널컬러를 이용한 추천 기능
  * 어울리는 색 추천 서비스를 바탕으로 화장품 및 의류와 같은 뷰티 관련 대상을 추천해주는 기능을 제공한다.
  * 사용자의 피부 톤 즉, 진단 결과를 바탕으로 하여 이에 맞는 화장품 및 옷의 컬러, 헤어 컬러를 추천한다.
- Open API를 이용한 일반 편의 기능
  * 날씨 및 미세먼지 농도와 같은 기상 변화에 대한 서비스를 실시간으로 제공하며, 현재 시각 정보 또한 제공한다.
- 퍼스널 컬러 자동 진단 기능
  * 색상 판단 알고리즘을 이용하여 사용자의 퍼스널 컬러를 진단하고, 이를 통하여 자신의 피부색과 맞는 최적의 톤을 알 수 있다.
  * 실제 퍼스널 컬러 전문가의 컨설팅 과정을 분석하고 이를 응용한 알고리즘을 바탕으로 퍼스널 컬러를 자동으로 판단한다.
- 퍼스널 컬러 수동 진단 기능
  * 웹페이지에 구성된 인터페이스와 터치 인식을 이용하여 사용자가 직접 어울리는 색채를 선택하여 퍼스널 컬러를 수동으로 진단할 수 있도록 한다.
### HW
- 음성 인식
  * 구글 어시스턴트 API를 활용하여 사용자의 음성을 인식하고, 사용자의 명령을 음성으로 받아 요청을 처리한다
- 사진 촬영
  * 퍼스널 컬러 진단에 사용될 사진을 촬영한다. 라즈베리 파이 키트 내의 카메라 모듈을 사용하여 라즈베리파이 자체 내의 카메라 설정을 통해 이를 촬영하여 사진 이미지를 생성한다.
- 터치 패널
  * 뷰티 미러 겉면에 사용자의 터치를 받을 수 있는 터치 패널을 부착하여 사용자로부터 터치를 받아 해당 영역에 대한 사용자의 명령을 수행하도록 한다.