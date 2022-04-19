import {View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../utils';

const Skeleton = ({skel}) => {
  if (skel === 'home') {
    return (
      <SkeletonPlaceholder>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <View
                style={{
                  width: moderateScale(120),
                  height: moderateScale(180),
                  borderRadius: 10,
                  marginRight: moderateScale(16),
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: moderateScale(120),
                  height: 20,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: moderateScale(120),
                  height: 20,
                  borderRadius: 4,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  width: moderateScale(120),
                  height: moderateScale(180),
                  borderRadius: 10,
                  marginRight: moderateScale(16),
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: moderateScale(120),
                  height: 20,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: moderateScale(120),
                  height: 20,
                  borderRadius: 4,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  width: moderateScale(120),
                  height: moderateScale(180),
                  borderRadius: 10,
                  marginRight: moderateScale(16),
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: moderateScale(120),
                  height: 20,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: moderateScale(120),
                  height: 20,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: moderateScale(160),
              height: 20,
              borderRadius: 4,
              marginTop: moderateScale(24),
              marginBottom: moderateScale(16),
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: moderateScale(120),
                height: moderateScale(180),
                borderRadius: 10,
                marginRight: moderateScale(16),
              }}
            />
            <View
              style={{
                flex: 1,
                height: moderateScale(180),
                paddingVertical: moderateScale(8),
                justifyContent: 'space-between',
                marginBottom: moderateScale(16),
              }}>
              <View
                style={{width: moderateScale(180), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(100), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(120), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(80), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(180), height: 30, borderRadius: 8}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: moderateScale(120),
                height: moderateScale(180),
                borderRadius: 10,
                marginRight: moderateScale(16),
              }}
            />
            <View
              style={{
                flex: 1,
                height: moderateScale(180),
                paddingVertical: moderateScale(8),
                justifyContent: 'space-between',
              }}>
              <View
                style={{width: moderateScale(180), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(100), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(120), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(80), height: 20, borderRadius: 4}}
              />
              <View
                style={{width: moderateScale(180), height: 30, borderRadius: 8}}
              />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    );
  } else {
    return (
      <SkeletonPlaceholder>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: moderateScale(32),
            }}>
            <View
              style={{
                width: moderateScale(24),
                height: moderateScale(24),
                borderRadius: 4,
              }}
            />

            <View
              style={{
                width: moderateScale(100),
                height: moderateScale(20),
                borderRadius: 4,
                marginStart: moderateScale(24 + 16),
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: moderateScale(24),
                  height: moderateScale(24),
                  borderRadius: 4,
                  marginRight: moderateScale(16),
                }}
              />
              <View
                style={{
                  width: moderateScale(24),
                  height: moderateScale(24),
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: moderateScale(16)}}>
            <View
              style={{
                width: moderateScale(210),
                height: moderateScale(315),
                borderRadius: moderateScale(20),
                marginRight: moderateScale(16),
              }}
            />
            <View
              style={{
                height: moderateScale(315),
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: moderateScale(90),
                  height: moderateScale(90),
                  borderWidth: moderateScale(1),
                  borderColor: colors.white,
                  borderRadius: moderateScale(10),
                }}
              />
              <View
                style={{
                  width: moderateScale(90),
                  height: moderateScale(90),
                  borderWidth: moderateScale(1),
                  borderColor: colors.white,
                  borderRadius: moderateScale(10),
                }}
              />
              <View
                style={{
                  width: moderateScale(90),
                  height: moderateScale(90),
                  borderWidth: moderateScale(1),
                  borderColor: colors.white,
                  borderRadius: moderateScale(10),
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: moderateScale(300),
              height: moderateScale(20),
              borderRadius: 4,
              marginBottom: moderateScale(8),
            }}
          />
          <View
            style={{
              width: moderateScale(200),
              height: moderateScale(20),
              borderRadius: 4,
              marginBottom: moderateScale(8),
            }}
          />
          <View
            style={{
              width: moderateScale(200),
              height: moderateScale(20),
              borderRadius: 4,
              marginBottom: moderateScale(8),
            }}
          />
          <View
            style={{
              width: moderateScale(100),
              height: moderateScale(20),
              borderRadius: 4,
              marginBottom: moderateScale(24),
            }}
          />

          <View
            style={{
              width: moderateScale(150),
              height: moderateScale(20),
              borderRadius: 4,
              marginBottom: moderateScale(8),
            }}
          />

          <View
            style={{
              width: moderateScale(320),
              height: moderateScale(100),
              borderRadius: 4,
              marginBottom: moderateScale(16),
            }}
          />

          <View
            style={{
              width: moderateScale(150),
              height: moderateScale(20),
              borderRadius: 4,
              marginBottom: moderateScale(8),
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <View>
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(90),
                  borderRadius: moderateScale(8),
                  marginRight: moderateScale(16),
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(16),
                }}
              />
            </View>
            <View>
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(90),
                  borderRadius: moderateScale(8),
                  marginRight: moderateScale(16),
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(16),
                }}
              />
            </View>
            <View>
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(90),
                  borderRadius: moderateScale(8),
                  marginRight: moderateScale(16),
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(16),
                }}
              />
            </View>
            <View>
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(90),
                  borderRadius: moderateScale(8),
                  marginRight: moderateScale(16),
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(16),
                }}
              />
            </View>
            <View>
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(90),
                  borderRadius: moderateScale(8),
                  marginRight: moderateScale(16),
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(4),
                }}
              />
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScale(20),
                  borderRadius: 4,
                  marginBottom: moderateScale(16),
                }}
              />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    );
  }
};

export default Skeleton;
