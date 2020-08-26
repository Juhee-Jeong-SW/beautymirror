#include <opencv2/opencv.hpp>

#include <opencv2/core/core.hpp>

#include <opencv2/highgui/highgui.hpp>

#include <opencv2/imgproc/imgproc.hpp>

#include <iostream>

#include <opencv2/imgproc/types_c.h>

#include <opencv2/highgui/highgui_c.h>

using namespace cv;
using namespace std;

static void test(Mat hlsImg) {
	
	int arg[12];
	for (int i = 0; i < 12; i++) {
		arg[i] = 0;
	}
	for (int row = 0; row < hlsImg.rows; row++) {

		for (int col = 0; col < hlsImg.cols; col++) {

			int H = hlsImg.at<Vec3b>(row,col)[0];
		    int L = hlsImg.at<Vec3b>(row, col)[1];
			int S = hlsImg.at<Vec3b>(row, col)[2];

			bool x = (H == 0) && (L == 0) && (S == 0);
			if (x == false) {

				if (S <= 64) {
					if (L > 192)
						arg[0] += 1;
					//printf("Pale tone"); 
					else if (L > 140&& L <= 192)
						arg[1] += 1;
					//printf("Light grayish");

					else if (L > 89 && L <= 140)
						arg[2] += 1;
					//printf("Grayish tone");

					else {
						arg[3] += 1;
						//printf("Dark Grayish tone");

					}
				}
				else if (S > 64&&S <= 128) {
					if (L >= 192)
						arg[4] += 1;
					//printf("Light tone");
					else if (L > 140&&L <= 192)
						arg[5] += 1;
					//printf("Soft tone");
					else if (L > 89&& L <= 140)
						arg[6] += 1;
					//printf("Dull tone");
					else {
						arg[7] += 1;
						//printf("Dark tone");
					}
				}
				else if (S >128 && S <= 192) {
					if (L > 166)
						arg[8] += 1;
					//printf("Bright tone");

					else if (L > 115&&L <=166)
						arg[9] += 1;
					//printf("String tone");

					else
						arg[10] += 1;
					//printf("Deep tone");
				}

				else {
					arg[11] += 1;
					//printf("Vivid tone");
				}
				//printf("\n");
			}
		}
	}


	for (int i = 0; i < 12; i++) {
		cout << arg[i] << "  " << endl;
	}
	//char skin;
	int max=0;
	for (int i = 0; i < 12; i++) {
		arg[i] >= arg[max] ? max = i : max = max;
	}
	cout << "Max:" << max << endl;

	switch (max) {
	case(0): cout << "Pale tone"<< endl;; break;
	case(1):cout<<"Light Grayish tone"<< endl; break;
	case(2):cout << "Grayish tone" << endl; break;
	case(3):cout << "Dark Grayish tone" << endl; break;
	case(4):cout << "Light tone" << endl; break;
	case(5):cout << "Soft tone" << endl; break;
	case(6):cout << "Dull tone" << endl; break;
	case(7):cout << "Dark tone" << endl; break;
	case(8):cout << "Bright tone" << endl; break;
	case(9):cout << "Strong tone" << endl; break;
	case(10):cout << "Deep tone" << endl; break;
	case(11):cout << "Vivid tone" << endl; break;
	}
}




int main(int argc, char **argv)
{
	Mat inputImg;
	Mat hlsImg;
	Mat skinImg;
	
	FILE *fp;
	fopen_s(&fp,"test.txt", "wt");

	inputImg = imread({ "./c.png.jpg" },1);
	//({ "./b.png.png" }, 1);
	
	skinImg = inputImg.clone();
	cvtColor(inputImg, hlsImg, CV_BGR2HLS);
	vector<Mat> hls_images(3);
	split(hlsImg, hls_images);
	
	
	for (int row = 0; row < hlsImg.rows; row++) {

		for (int col = 0; col < hlsImg.cols; col++) {
			uchar H = hlsImg.at<cv::Vec3b>(row, col)[0];
			uchar L = hlsImg.at<cv::Vec3b>(row, col)[1];
			uchar S = hlsImg.at<cv::Vec3b>(row, col)[2];

			double LS_ratio = ((double)L) / ((double)S);
			bool skin_pixel = (S >= 50) && (LS_ratio > 0.5) && (LS_ratio < 3.0) && ((H <= 14) || (H >= 165));

			if (skin_pixel == false)
			{
				hlsImg.at<cv::Vec3b>(row, col)[0] = 0;
				hlsImg.at<cv::Vec3b>(row, col)[1] = 0;
				hlsImg.at<cv::Vec3b>(row, col)[2] = 0;
			}
		}
	}
	for (int row = 0; row < hlsImg.rows; row++) {

		for (int col = 0; col < hlsImg.cols; col++) {
			uchar H = hlsImg.at <Vec3b>(row, col)[0];
			uchar L = hlsImg.at<Vec3b>(row, col)[1];
			uchar S = hlsImg.at<Vec3b>(row, col)[2];
			fprintf(fp, "( %d\t , %d )\t %d\t %d\t %d\n ", col, row, H, L, S);
		}
	}

	test(hlsImg);
	namedWindow("Original", CV_WINDOW_AUTOSIZE);
	namedWindow("SkinDetected", CV_WINDOW_AUTOSIZE);

	moveWindow("Original", 100, 100);
	moveWindow("SkinDetected", 120, 120);

	imshow("Original", inputImg);
	imshow("SkinDetected", hlsImg);


	waitKey(0);
	return(0);


}

