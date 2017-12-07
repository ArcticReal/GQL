
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentType} from '../content/ContentType.js';
import {FacilityType} from '../product/FacilityType.js';


const FacilityContentType = new GraphQLObjectType({
  name: 'FacilityContentType',
  description: 'Type for FacilityContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContent, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityContent.facilityId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (facilityContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${facilityContent.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContentType};
    