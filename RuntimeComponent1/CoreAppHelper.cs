using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RuntimeComponent1
{
    public sealed class CoreAppHelper
    {
        public void ExtendViewIntoTitleBar(bool val)
        {
            var currentview = Windows.ApplicationModel.Core.CoreApplication.GetCurrentView();

            currentview.TitleBar.ExtendViewIntoTitleBar = val;

        }
    }
}
