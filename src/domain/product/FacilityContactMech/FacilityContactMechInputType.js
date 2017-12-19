import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const FacilityContactMechInputType = new GraphQLInputObjectType({
  name: 'FacilityContactMechInputType',
  description: 'input type for FacilityContactMech',

  fields: () => ({
    comments: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    extension: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechInputType};
    