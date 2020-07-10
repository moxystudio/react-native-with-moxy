package studio.moxy.rnwm;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash;

// import org.jitsi.meet.sdk.JitsiMeet;
// import org.jitsi.meet.sdk.JitsiMeetActivity;
// import org.jitsi.meet.sdk.JitsiMeetConferenceOptions;

import java.net.MalformedURLException;
import java.net.URL;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "reactNativeWithMoxy";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this); // <- display the generated bootsplash.xml drawable over our MainActivity
    // setupJitsiMeet();
  }

//  private void setupJitsiMeet() {
//    URL serverURL;
//    try {
//      serverURL = new URL("https://meet.jit.si");
//    } catch (MalformedURLException e) {
//      throw new RuntimeException("Invalid server URL!", e);
//    }
//
//    JitsiMeetConferenceOptions defaultOptions
//            = new JitsiMeetConferenceOptions.Builder()
//            .setServerURL(serverURL)
//            .setWelcomePageEnabled(false)
//            .build();
//    JitsiMeet.setDefaultConferenceOptions(defaultOptions);
//
//    JitsiMeetActivity.launch(this, "17805B99-67CB-493A-B69C-DA4ED4CD3C60");
//  }
}
